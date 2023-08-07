import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './features/products/productSlice'
import { productsApi } from './features/products/productsApi'
import cartReducer from './features/cart/cartSlice';
import addressReducer from './features/Address/AddressSlice'
import LocationReducer from './features/Location/LocationSlice'
import OrdersRedcuer from './features/Orders/OrdersSlice'
import StoreDetailsReducer from './features/StoreDetails/StoreDetails'

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    address: addressReducer,
    location: LocationReducer,
    orders: OrdersRedcuer,
    storedetails: StoreDetailsReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productsApi.middleware);
  }
})