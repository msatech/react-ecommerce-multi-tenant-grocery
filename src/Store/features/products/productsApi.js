import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi  = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => "products",
        }),
        getSingleProducts: builder.query({
            query: (id) => `products/${id}`,
        }),
        getProductCategory: builder.query({
            query: (category) => `products/category/${category}`,
        })
    })
})

export const { useGetAllProductsQuery, useGetSingleProductsQuery, useGetProductCategoryQuery } = productsApi