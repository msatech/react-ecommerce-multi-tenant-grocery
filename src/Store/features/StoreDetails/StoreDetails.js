import { createSlice } from '@reduxjs/toolkit'
import { toast } from "react-toastify";
import { v4 as uuid } from 'uuid';

const initialState = {
    storeDetails: localStorage.getItem("storedetails") ? JSON.parse(localStorage.getItem("storedetails")) : null,
}



const storeDetailsSlice = createSlice({
    name: "storedetails",
    initialState,
    reducers: {
        addStoreDetails(state, action) {

            
                state.storeDetails = action.payload
                

                localStorage.setItem("storedetails", JSON.stringify(state.storeDetails))
            
        },
        
        
        
    }
})


export const {
    addStoreDetails
} = storeDetailsSlice.actions;

export default storeDetailsSlice.reducer;