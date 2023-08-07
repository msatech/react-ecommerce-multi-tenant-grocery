import React, { useEffect } from 'react'
import './MobileCartSection.css'

import { useSelector, useDispatch } from "react-redux"
import { getTotal } from '../../Store/features/cart/cartSlice';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import {  Link } from "react-router-dom";

function MobileCartSection() {

    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    useEffect(() => {
        dispatch(getTotal())
    }, [cart, dispatch])

    return (
        <div className='mobilecartsection'>
            {/* {cart.cartTotalQuantity}
            {cart.cartTotalAmount} */}
            <div className='mobilecartsection__left'>
                <div className='mobilecartsection__left__total__items'>{cart.cartTotalQuantity} <span>items</span></div>
                <div className='mobilecartsection__left__total__price'><span>&#8377;</span>  {parseFloat(cart.cartTotalAmount).toFixed(2)}</div>
            </div>
            <Link className='link' to="/checkout">
                <div className='mobilecartsection__right'>
                    <p>Checkout</p> <ArrowForwardIcon className="checkout__forward__icon" />
                </div>
            </Link>

        </div>
    )
}

export default MobileCartSection
