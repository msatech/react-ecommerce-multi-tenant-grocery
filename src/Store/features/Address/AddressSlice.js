import { createSlice } from '@reduxjs/toolkit'
import { toast } from "react-toastify";
import { v4 as uuid } from 'uuid';

const initialState = {
    AddressItems: localStorage.getItem("addresses") ? JSON.parse(localStorage.getItem("addresses")) : [],
}



const AddressSlice = createSlice({
    name: "address",
    initialState,
    reducers: {
        addAddress(state, action) {

                const tempAddress = {
                    ...action.payload,
                    id: uuid()
                    
                };
                state.AddressItems.push(tempAddress)
                toast.success(`Address Added`,{
                    position: "top-right",
                })

                localStorage.setItem("addresses", JSON.stringify(state.AddressItems))
            
        },
        removeAddress(state, action){
            
            const newAddressItems = state.AddressItems.filter(
                (AddressItems) => AddressItems.id !== action.payload.id
            )
            state.AddressItems = newAddressItems;
            localStorage.setItem("addresses", JSON.stringify(state.AddressItems))
        },
        
        
    }
})


export const {
    addAddress, removeAddress
} = AddressSlice.actions;

export default AddressSlice.reducer;