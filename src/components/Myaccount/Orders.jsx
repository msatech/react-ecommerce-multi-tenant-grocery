import React from 'react'
import './Orders.css'
import { useSelector } from "react-redux"

function Orders() {
    const orders = useSelector((state) => state.orders.Orders)
    
    return (
        <div className='orders__section'>
            <div className='orders__container'>
                <div className='orders__items'>
                    {
                        orders?.map(order => (

                    <div className='orders__item'>
                        <div className='order__header'>
                            <p className='order__number'>Order No. {order.orderId}</p>
                            <p className='order__date'>05-12-2019</p>

                        </div>
                        <div className='order__details'>
                            <p className='order__quantity'>Quantity: <span className='order__quantity__value'>{order.totalItems}</span> </p>
                            <p className='order__amount'>Total Amount: <span className='order__amount__value'> {parseFloat(order.totalAmount).toFixed(2)} </span></p>
                        </div>
                        <div className='order__details__status__btn'>
                            <div className='order__details__btn'>Details</div>
                            <div className='order__details__sattus pending'>pending</div>
                        </div>
                    </div>
                        ))
                    }
                    
                    


                </div>

            </div>

        </div>
    )
}

export default Orders
