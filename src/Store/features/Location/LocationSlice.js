import { createSlice } from '@reduxjs/toolkit'
import { toast } from "react-toastify";

const initialState = {
    location: localStorage.getItem("location") ? JSON.parse(localStorage.getItem("location")) : {
        latitude: 0,
        longitude: 0,
        address: null,
        country: null,
        postal_code: null,
        locality: null,
        sublocality: null,
        name: null,

    },
}



const LocationSlice = createSlice({
    name: "location",
    initialState,
    reducers: {
        setLocation: (state, action) => {
            
            state.location = action.payload;
            localStorage.setItem("location", JSON.stringify(state.location))
        },
        
    }
})


export const {
    setLocation
} = LocationSlice.actions;

export default LocationSlice.reducer;