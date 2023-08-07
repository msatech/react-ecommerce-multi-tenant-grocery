import React, { useState } from 'react'
import './Address.css'

import Drawer from "react-bottom-drawer";
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { addAddress, removeAddress } from '../../Store/features/Address/AddressSlice';
import { useSelector } from 'react-redux';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Address = ({ handleDeliveryAddress, values }) => {

    const dispatch = useDispatch()

    const addresses = useSelector((state) => state.address.AddressItems);

    const [isOfferVisible, setIsOfferVisible] = useState(false);
    const openOffersDrawer = React.useCallback(() => setIsOfferVisible(true), []);
    const closeOffersDrawer = React.useCallback(() => setIsOfferVisible(false), []);

    const [address, setAddress] = useState({
        fullname: "",
        phonenumber: null,
        pincode: null,
        completeaddress: ""

    })



    const handleAddressChange = input => (e) => {
        setAddress(prevState => ({
            ...prevState,
            [input]: e.target.value
        }));
    }

    const handleSaveAddress = () => {
        dispatch(addAddress(address))
        closeOffersDrawer()
        setAddress({
            fullname: "",
            phonenumber: null,
            pincode: null,
            completeaddress: ""
        });
    }


    const handleRemoveAddress = (savedaddress) => {
        dispatch(removeAddress(savedaddress))
    }

    return (
        <div className='address'>

            {
                addresses?.map(savedaddress => (

                    <div className={`saved__address ${savedaddress?.id === values?.id ? 'selected' : null}`} key={savedaddress.id} onClick={() => handleDeliveryAddress(savedaddress)}>
                        <p className='saved__address__name'>{savedaddress.fullname}</p>
                        <p className='saved__address__address'>{savedaddress.completeaddress} - {savedaddress.pincode}</p>
                        <p className='saved__address__mobile'>Mobile No. {savedaddress.phonenumber}</p>
                        {
                            savedaddress?.id === values?.id ? (
                                <CheckCircleIcon className="saved__address__checked" />
                            ) : (

                                <CancelIcon onClick={(e) => handleRemoveAddress(savedaddress)} className="saved__address__remove" />
                            )
                        }
                    </div>
                ))
            }
            {
                addresses.length < 3 ? (

                    <div className='add__address' onClick={openOffersDrawer}>
                        <AddCircleRoundedIcon className='add__address__icon' />
                        <p>Add  Address</p>
                    </div>
                ) : null
            }

            <Drawer
                duration={250}
                hideScrollbars={true}
                onClose={closeOffersDrawer}
                isVisible={isOfferVisible}
                className='address__drawer'
            >

                <div className='address__form'>
                    <div className='address__form__general__info'>

                        <TextField
                            helperText="Please enter your Full name"
                            id="demo-helper-text-misaligned"
                            label="Full Name"
                            className='text__field'
                            name='fullname'
                            value={address.fullname}
                            onChange={handleAddressChange('fullname')}
                        />

                        <TextField
                            helperText="Please Enter Pincode"
                            id="demo-helper-text-misaligned"
                            label="Pincode"
                            className='text__field'
                            name='pincode'
                            value={address.pincode}
                            onChange={handleAddressChange('pincode')}
                        />

                        <TextField
                            helperText="Please Enter Mobile Number"
                            id="demo-helper-text-misaligned"
                            label="Mobile Number"
                            className='text__field'
                            name='phonenumber'
                            value={address.phonenumber}
                            onChange={handleAddressChange('phonenumber')}
                        />
                    </div>


                    <TextField
                        helperText="Please Enter Address"
                        id="demo-helper-text-misaligned"
                        label="Delivery Address"
                        className='text__field'
                        name='completeaddress'
                        value={address.completeaddress}
                        onChange={handleAddressChange('completeaddress')}
                    />

                    <button className="address__btn" onClick={handleSaveAddress}>Save Address</button>

                </div>


            </Drawer>
        </div>
    )
}

export default Address