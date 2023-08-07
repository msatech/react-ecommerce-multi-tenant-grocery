import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"

import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import './Cart.css'
import CloseIcon from '@mui/icons-material/Close';
import CartItem from './CartItem';

import {  Link } from "react-router-dom";

import { clearCart, getTotal } from '../../Store/features/cart/cartSlice';

function Cart({ toggleDrawer, draweropen }) {
    
    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);

    const handleClearCartItems = () => {
        dispatch(clearCart());
    }

    useEffect(() => {
        dispatch(getTotal())
    }, [cart, dispatch])
    

    

    return (
        <div className='cart__section'>


            <Drawer
                edge="end"
                className="cart__drawer"
                anchor="right"
                open={draweropen}
                onClose={toggleDrawer(false)}

            >

                <div className='cart__container'>
                    <div className='cart__header__section'>
                        <h2>My Cart({cart.cartItems.length} items) </h2>
                        <CloseIcon className="cart__close__icon" onClick={toggleDrawer(false)} />
                    </div>
                    <div className='cart__items__section'>
                        {
                            cart.cartItems.length === 0 ? (
                                <p>Your cart is Currently empty</p>
                            ) : (
                                <div>
                                    {
                                        cart.cartItems?.map(cartItem =>(
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

            </Drawer>


        </div>
    )
}

export default Cart
