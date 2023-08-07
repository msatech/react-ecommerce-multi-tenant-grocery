import { createSlice } from '@reduxjs/toolkit'
import { toast } from "react-toastify";
import { v4 as uuid } from 'uuid';
import { clearCart } from '../cart/cartSlice';

const initialState = {
    Orders: localStorage.getItem("orders") ? JSON.parse(localStorage.getItem("orders")) : [],
}



const OrdersSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {
        addOrders(state, action) {

                const tempAddress = {
                    ...action.payload,
                    id: uuid()
                    
                };
                if(!action.payload.deliveryAddress){
                    toast.error(`Please Select Address`,{
                        position: "top-right",
                    })
                }
                else if(action.payload.orderId){
                    
                    state.Orders.push(tempAddress)
                    toast.success(`Thanks For Purchasing`,{
                        position: "top-right",
                    })
                    localStorage.setItem("orders", JSON.stringify(state.Orders))
                    
                }
                else{
                    toast.error(`Invalid Order Id`,{
                        position: "top-right",
                    })
                }

                
            
        },
        
        
        
    }
})


export const {
    addOrders
} = OrdersSlice.actions;

export default OrdersSlice.reducer;