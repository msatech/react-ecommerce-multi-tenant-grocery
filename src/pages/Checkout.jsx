import React, { useState, useEffect } from 'react'
import BackButtonHeader from '../components/BackButtonHeader/BackButtonHeader'
import Footer from '../components/Footer/Footer'
import TopHeader from '../components/TopHeader'
import './Checkout.css'
import Address from '../components/Address/Address'
import { useSelector, useDispatch } from "react-redux"
import CartItem from '../components/Cart/CartItem'
// icons
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import DeliveryDiningOutlinedIcon from '@mui/icons-material/DeliveryDiningOutlined';
import OrderDetail from '../components/Checkout/OrderDetail'
import { getTotal } from '../Store/features/cart/cartSlice'

import GooglePayButton from '@google-pay/button-react'
import { addOrders } from '../Store/features/Orders/OrdersSlice'
const Checkout = () => {
  const dispatch = useDispatch()

  const [checkout, setCheckout] = useState({
    user: null,
    deliveryAddress: null,
    delivery: true,
    products: null,
    totalAmount: null,
    totalItems: null,
    orderId: null,
  })

  const cart = useSelector((state) => state.cart);
  
  useEffect(() => {
    dispatch(getTotal())
    setCheckout(prevState => ({
      ...prevState,
      user: localStorage.getItem("user-uid"),
      products: cart.cartItems,
      totalAmount: cart.cartTotalAmount,
      totalItems: cart.cartTotalQuantity

    }))
  }, [cart, dispatch])



  const handleDeliveryAddress = (address) => {
    setCheckout(prevState => ({
      ...prevState,
      deliveryAddress: address
    }))
  }


  // Handle Place Order
  const handlePlaceOrder = () => {
    setCheckout(prevState => ({
      ...prevState,
      orderId: Math.floor(10000000000 + Math.random() * 90000000000)
    }))
    dispatch(addOrders(checkout))
    console.log(checkout)
  }

  return (
    <div className='checkout__page'>
      <div className="header">
        <TopHeader handleClickOpen />

      </div>
      <div className='mobileheader__section'>
        <BackButtonHeader backText="Checkout" />
      </div>
      <div className='checkout__container'>
        <div className='Checkout__header'>
          <h1> <KeyboardBackspaceIcon /> Checkout</h1>
        </div>

        <div className='checkout__row'>
          <div className='checkout__user__info'>
            <div className='checkout__user__info__steps'>
              <div className='user__address'>
                <p className='checkout__title'>1. Delivery Address</p>
                <Address handleDeliveryAddress={handleDeliveryAddress} values={checkout.deliveryAddress} />
              </div>
              <div className='user__delivery__method'>
                <p className='checkout__title'>2. Delivery Method</p>
                <div className='delivery__methods' >
                  <div className={`${!checkout.delivery ? 'active' : null}`} onClick={() => setCheckout((prevState => ({ ...prevState, delivery: false })))}>
                    <StoreOutlinedIcon /> Store
                  </div>
                  <div className={`${checkout.delivery ? 'active' : null}`} onClick={() => setCheckout((prevState => ({ ...prevState, delivery: true })))}>
                    <DeliveryDiningOutlinedIcon /> Delivery
                  </div>
                </div>
              </div>
              <div className='user__payment__method'>
                <p className='checkout__title'>3. Payment Methods</p>
                <div className='payment__modes'>
                  <div className='gogolepay'>
                    <GooglePayButton
                      environment="TEST"
                      paymentRequest={{
                        apiVersion: 2,
                        apiVersionMinor: 0,
                        allowedPaymentMethods: [
                          {
                            type: 'CARD',
                            parameters: {
                              allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                              allowedCardNetworks: ['MASTERCARD', 'VISA'],
                            },
                            tokenizationSpecification: {
                              type: 'PAYMENT_GATEWAY',
                              parameters: {
                                gateway: 'example',
                                gatewayMerchantId: 'exampleGatewayMerchantId',
                              },
                            },
                          },
                        ],
                        merchantInfo: {
                          merchantId: '12345678901234567890',
                          merchantName: 'Demo Merchant',
                        },
                        transactionInfo: {
                          totalPriceStatus: 'FINAL',
                          totalPriceLabel: 'Total',
                          totalPrice: cart.cartTotalAmount,
                          currencyCode: 'INR',
                          countryCode: 'IN',
                        },
                      }}
                      onLoadPaymentData={paymentRequest => {
                        console.log('load payment data', paymentRequest);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='checkout__orders__container'>
            <div className='checkout__orderdetails'>
              <h2># Order Details</h2>
              <div className='checkout__orderdetails__products'>
                <p className='order__details'>Price <span className="price">&#8377; {Math.round(cart.cartTotalAmount * 100) / 100}</span> </p>
                <p className='order__details'>Delivery Charges <span className="delivery__charges">Free</span> </p>
                <p className='order__details'>Tax (GST) <span className="tax__charges">&#8377; 102.5</span> </p>
                <p className='order__details'>Total Discount <span className="price">&#8377; 100</span> </p>
              </div>

              <div className='total__amount__to__pay'>
                <p className='order__amount'>Total Amount <span className="total__amount">&#8377; {Math.round(cart.cartTotalAmount * 100) / 100}</span> </p>
              </div>

              <div className='saved__amount'>
                congratulations you Save &#8377; 200
              </div>

            </div>
            <div className='checkout__orders__btn' onClick={handlePlaceOrder}>
                Pay Now
            </div>

          </div>

        </div>

      </div>

      <div className='footer__section'>
        <Footer />
      </div>
    </div>

  )
}

export default Checkout