import React, { useEffect, useState } from 'react'
import BackButtonHeader from '../BackButtonHeader/BackButtonHeader'
import Footer from '../Footer/Footer'
import MobileFooter from '../MobileFooter/MobileFooter'
import TopHeader from '../TopHeader'
import { useSelector, useDispatch } from "react-redux"
import { clearCart, getTotal } from '../../Store/features/cart/cartSlice';
import CartItem from './CartItem'
import {  Link } from "react-router-dom";
import './MobileCartPage.css'

const MobileCartPage = () => {

    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);


    useEffect(() => {
        dispatch(getTotal())
    }, [cart, dispatch])

    return (
        <div className='mobilecartpage'>
            <div className="header">
                <TopHeader handleClickOpen />

            </div>
            <div className='mobileheader__section'>
                <BackButtonHeader backText="Cart" />
            </div>

            <div className='cart__container'>
                <div className='cart__items__section'>
                    {
                        cart.cartItems.length === 0 ? (
                            <p>Your cart is Currently empty</p>
                        ) : (
                            <div>
                                {
                                    cart.cartItems?.map(cartItem => (
                                        <CartItem cartItem={cartItem} key={cartItem.id} />

                                    ))
                                }
                            </div>


                        )
                    }
                    {/* cart items section */}
                </div>
                <div className='cart__footer__section'>
                    <div className='cart__price'>
                        <p className='cart__price__items'>{cart.cartTotalQuantity} items</p>
                        <p className='cart__price__price'>&#8377; {Math.round(cart.cartTotalAmount * 100) / 100}</p>
                    </div>
                    <div className='cart__checkout__btn'>
                        <Link to="/checkout"><button>CHECKOUT</button></Link>
                    </div>
                </div>
            </div>
            <div className='mobile__footer__section'>
                <MobileFooter />
            </div>

            <div className='footer__section'>
                <Footer />
            </div>
        </div>
    )
}

export default MobileCartPage