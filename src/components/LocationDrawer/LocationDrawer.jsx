import React, { useEffect } from 'react'

import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

import CloseIcon from '@mui/icons-material/Close';

import './LocationDrawer.css'
import Location from '../Location/Location';
import AutoComplete from '../Location/AutoComplete';
import useGeolocation from 'react-hook-geolocation'

import { useDispatch } from "react-redux"
import { setLocation } from '../../Store/features/Location/LocationSlice';
import Map from '../Location/Map';
import Geocode from "react-geocode";

function LocationDrawer({ toggleLocationDrawer, locationDraweropen }) {
    Geocode.setApiKey("AIzaSyCmijT_PoZ6_j28v0Of37JWKu7ACqMolmY");
    Geocode.setLanguage("en");
    Geocode.setRegion("in");
    Geocode.setLocationType("ROOFTOP");


    const dispatch = useDispatch()
    const geolocation = useGeolocation({
        enableHighAccuracy: true,
    })
    const getCurretlocation = () => {
        if (geolocation.error) {
            console.log("error while getting current location")
        }
        else if (geolocation) {

            Geocode.fromLatLng(geolocation.latitude, geolocation.longitude).then(
                (response) => {

                    const address = response.results[0].formatted_address;
                    const name = response.results[0].name;
                    console.log(response.results[0])

                    var country, postal_code, locality, sublocality;
                    
                    for (let i = 0; i < response.results[0].address_components.length; ++i) {
                        var component = response.results[0].address_components[i];
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
                        latitude: geolocation.latitude,
                        longitude: geolocation.longitude,
                        address,
                        country,
                        postal_code,
                        locality,
                        sublocality,
                        name:address


                    }))
                },
                (error) => {
                    console.error(error);
                }
            );



        }

    }
    return (
        <div className='locationdrawer'>
            <Drawer
                edge="end"
                className="cart__drawer"
                anchor="left"
                open={locationDraweropen}
                onClose={toggleLocationDrawer(false)}

            >
                <div className='location__map__view'>
                    <Location />
                    {/* <Map /> */}
                    <div className='location__autocomplete__search'>
                        <AutoComplete toggleLocationDrawer={toggleLocationDrawer} />

                    </div>
                    <div className='getcurreentlocation'>
                        <button onClick={getCurretlocation}>get current location</button>
                    </div>
                </div>





            </Drawer>
        </div>
    )
}

export default LocationDrawer
