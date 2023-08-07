import React from 'react'
import './CartItem.css'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

import { useDispatch } from 'react-redux'
import { removeFromCart, decreaseCartQuantity, addToCart } from '../../Store/features/cart/cartSlice'

function CartItem( { cartItem } ) {
    const dispatch = useDispatch();

    const handleRemoveFromCart = (cartItem) => {
        dispatch(removeFromCart(cartItem))
    }

    const decreaseCartQuantityValue = (cartItem) => {
        dispatch(decreaseCartQuantity(cartItem))
    }
    const addCartQuantityValue = (cartItem) => {
        dispatch(addToCart(cartItem))
    }
    return (
        <div className='cartitem'>
            <div className='cartitem__image'>
                <img src={cartItem.image} alt={cartItem.title} />
            </div>
            <div className='cartitem__product__desc'>
                <div className='cartitem__product__title'>
                    <p>{cartItem.title}</p>
                    <a className='cartitem__remove__btn' onClick={() => handleRemoveFromCart(cartItem)}>Remove</a>
                </div>
                <p className='cartitem__product__unit'>1 Unit</p>
                <div className='cartitem__product__price__btn'>
                    <div className='cart__item__product__price'>
                        <p className='cart__item__price'><span>&#8377;</span> {cartItem.price} </p>
                        <div className='cartitem__product__btn'>
                            <button> <RemoveIcon className='cartitem__product__btn__remove' onClick={() => decreaseCartQuantityValue(cartItem)} /> </button> 
                            <p> {cartItem.cartQuantity} </p>
                            <button> <AddIcon className='cartitem__product__btn__add' onClick={() => addCartQuantityValue(cartItem)} /> </button>
                        </div>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}

export default CartItem
