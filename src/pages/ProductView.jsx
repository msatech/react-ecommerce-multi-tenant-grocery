import React from 'react'
import Footer from '../components/Footer/Footer'
import MobileFooter from '../components/MobileFooter/MobileFooter'
import MobileHeader from '../components/MobileHeader/MobileHeader'
import TopHeader from '../components/TopHeader'
import './ProductView.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Separator from '../components/Separator/Separator'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ProductCarousel from '../components/ProductCarousel/ProductCarousel'
import OffersSlider from '../components/OffersSlider/OffersSlider'
import BackButtonHeader from '../components/BackButtonHeader/BackButtonHeader'

// Redux RTK imports
import { useGetSingleProductsQuery, useGetProductCategoryQuery } from '../Store/features/products/productsApi'
import ProductPageSkeleton from '../components/SkeletonLoaders/ProductPageSkeleton'
import SkeletonCarouel from '../components/SkeletonLoaders/SkeletonCarouel'

import { useDispatch } from "react-redux"


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import { addToCart } from '../Store/features/cart/cartSlice'


function ProductView() {

    const dispatch = useDispatch();
    
    let { id, category } = useParams();

    const { data, error, isLoading } = useGetSingleProductsQuery(id)


    const { data: getProductsByCategory = [], isFetching: categoryFetching, error: categoryError } = useGetProductCategoryQuery(category);
    

    
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    }


    return (
        <div className='productview'>
            <div className="header">
                <TopHeader />


            </div>
            <div className='mobileheader__section'>
                <BackButtonHeader />

            </div>

            <div className='productview__main__section'>
                {
                    error ? (
                        <> Error Occured </>
                    ) : isLoading ? (
                        
                        <ProductPageSkeleton />
                    ) : data ? (

                        <div className='productarea'>

                            <div className='productarea__product__image'>
                                <img src={data.image} alt="viewproduct" />
                            </div>

                            <div className='productarea__product__info'>
                                <h2 className='productarea__product__title'>{data.title}</h2>
                                <p className='productarea__product__unit'>1 unit <InfoOutlinedIcon className="tooltip" /></p>
                                <div className='product__price__and__button'>
                                    <div className='productarea__product__price'>
                                        <p className='productarea__old__price'><span>&#8377;</span> {data.price} </p>
                                        <p className='productarea__new__price'> <strike> <span>&#8377;</span> 20</strike>  </p>
                                    </div>
                                    <div className='productarea__product__button'>

                                        <button className='productarea__add__cart' onClick={() => handleAddToCart(data)}>
                                            <ShoppingCartIcon className='productarea__add__cart__icon' />

                                            ADD
                                        </button>
                                    </div>
                                </div>


                                <Separator />

                                <div className='productarea__product__desc'>
                                    <h2>Description</h2>
                                    <div className="description">
                                        {data.description}



                                    </div>

                                </div>

                            </div>

                        </div>
                    ) : null
                }


                <OffersSlider title="Grab The Deal" />

                <div className=''>

                {
                    categoryError ? (
                        <> Error Occured </>
                    ) : categoryFetching ? (
                        
                        <SkeletonCarouel />
                    ) : getProductsByCategory ? (

                        <ProductCarousel title="Best Deals" Products={getProductsByCategory} viewall={false} />
                        
                    ) : null
                }



                </div>
            </div>





            <div className='footer__section'>
                <Footer />
            </div>
            {/* <div className='mobile__footer__section'>
                <MobileFooter />
            </div> */}
        </div>
    )
}

export default ProductView
