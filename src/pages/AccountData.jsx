import React,{ useState, useEffect } from 'react'

import {
    BrowserRouter as Router,
    useParams,
    useRouteMatch,
  } from "react-router-dom";
import Address from '../components/Address/Address';
import Orders from '../components/Myaccount/Orders';

import { useSelector, useDispatch } from "react-redux"

function AccountData({ handleActiveTab }) {
  
    const dispatch = useDispatch()
  
    const [checkout, setCheckout] = useState({
      deliveryAddress: null,
      delivery: true,
  
    })
  
    const cart = useSelector((state) => state.cart);
  
  
  
    const handleDeliveryAddress = (address) => {
      setCheckout(prevState => ({
        ...prevState,
        deliveryAddress: address
      }))
    }
 
    let { accountData } = useParams();

    handleActiveTab(accountData)
    
    
    if(accountData === "address"){
      return (
        <div>
          <h2 className='myaccount__title'>Address</h2>
          <Address  handleDeliveryAddress={handleDeliveryAddress} values={checkout.deliveryAddress} />
        </div>
      );

    }
    else if( accountData === "my-orders" ){
      return (
        <div>
          <h2 className='myaccount__title'>My Orders</h2>
          <Orders />
        </div>
      ); 
    }

    else if( accountData === "help-support" ){
      return (
        <div>
          <h2 className='myaccount__title'>Help And Support</h2>
         
        </div>
      ); 
    }
    else{
      return (
        <div>
          <h2 className='myaccount__title'>My Orders</h2>
          <Orders />
        </div>
      ); 
    }
}

export default AccountData