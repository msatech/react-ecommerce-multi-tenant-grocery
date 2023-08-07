import React from 'react'
import './AppCard.css'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch } from "react-redux"
import { addToCart } from '../../Store/features/cart/cartSlice';
import { Link } from "react-router-dom";

function Card({ product }) {
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    }

    return (
        <div className='appcard'>
            <div className='product__image'>
                <Link to={`/viewproduct/${product.category}/${product.id}`} className="link">
                    <img src={product.image} alt={product.title} />
                </Link>
            </div>
            <div className='product__info'>

                <p className='product__title'>
                    <Link to={`/viewproduct/${product.category}/${product.id}`} className="link">
                        {product.title}
                    </Link>
                </p>

                <div className='product__desc'>
                    <div className='product__price__view'>
                        {/* <p className='product__unit'> {product.unit} </p> */}
                        <p className='product__unit'> 1 Unit </p>
                        <div className='product__price'>
                            <p className='new__price'><span>&#8377;</span> {product.price} </p>
                            <p className='old__price'> <strike> <span>&#8377;</span> {product.oldprice} </strike>  </p>

                        </div>
                    </div>
                    <div className='product__button'>
                        <button className='add__cart' onClick={() => handleAddToCart(product)}>
                            <ShoppingCartIcon className='add__cart__icon' />
                            ADD
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
