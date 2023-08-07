import React, { useState, useEffect } from 'react'
import Autocomplete from "react-google-autocomplete";
import { useSelector, useDispatch } from 'react-redux';
import { setLocation } from '../../Store/features/Location/LocationSlice';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
function AutoComplete({ toggleLocationDrawer }) {

    const dispatch = useDispatch()
    const location = useSelector((state) => state.location.location)
    const [formatedaddress, setFormatedaddress] = useState(`${location.name} | ${location.locality} | ${location.postal_code}` || "Select location")
   
    useEffect(() => {
        setFormatedaddress(location.address)
    }, [location.address])

    return (
        <div className='location__autocompletersection'>
            <ArrowBackIcon onClick={toggleLocationDrawer(false)} className='closeicon__autocompleter' />
            <Autocomplete
                className='mapautocomplete'

                placeholder='Select Delivery location '
                apiKey="AIzaSyCmijT_PoZ6_j28v0Of37JWKu7ACqMolmY"

                onPlaceSelected={(place) => {

                    var country, postal_code, locality, sublocality;
                    for (let i = 0; i < place.address_components.length; ++i) {
                        var component = place.address_components[i];
                        if (!sublocality && component.types.indexOf("sublocality") > -1)
                            sublocality = component.long_name;
                        else if (!locality && component.types.indexOf("locality") > -1)
                            locality = component.long_name;
                        else if (!postal_code && component.types.indexOf("postal_code") > -1)
                            postal_code = component.long_name;
                        else if (!country && component.types.indexOf("country") > -1)
                            country = component.long_name;
                    }
                    

                    dispatch(setLocation({
                        latitude: place.geometry.location.lat(),
                        longitude: place.geometry.location.lng(),
                        address: place.formatted_address,
                        country,
                        postal_code,
                        locality,
                        sublocality,
                        name: place.name

                    }))

                }}

                options={{

                    componentRestrictions: { country: "in" },
                    fields: ["address_components","formatted_address", "geometry", "icon", "name",],
                    strictBounds: false,
                    types: ["establishment"],


                }}
                defaultValue={formatedaddress || "Select Delivery location"}
            />
        </div>
    )
}

export default AutoComplete
