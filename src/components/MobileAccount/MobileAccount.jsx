import React, { useState } from 'react'
import './MobileAccount.css'
import Avatar from '@mui/material/Avatar';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import HelpIcon from '@mui/icons-material/Help';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

import { useSelector } from "react-redux"
import LocationDrawer from '../LocationDrawer/LocationDrawer';
import { Link } from 'react-router-dom';

function MobileAccount() {

    // Location Drawer setting

    const [locationDraweropen, setLocationDraweropen] = useState(false)

    const location = useSelector((state) => state.location.location)

    const toggleLocationDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setLocationDraweropen(open);
    };

    return (
        <div className='mobileaccount__section'>
            <div className='location__section'>
                <div className='user__avatar__section'>
                    <Avatar sx={{ bgcolor: "white" }} className='user__image' alt="Remy Sharp" src="https://rkvosngb4nilhv5vpgezpoosgupgg75sf3kuyzxrgwyasb2t.arweave.net/iqrpNMHjULPXt-XmJl7nSNR5jf7Iu1_Uxm8TWwCQdT0/?ext=png" />

                </div>
                <div className='location__add'>
                    <div className='location__view'>
                        <p className='location__view__location'> <span><LocationOnIcon className="location__icon" /></span> {location.locality || "Select location"} </p>
                    </div>
                    <p onClick={toggleLocationDrawer(true)} className='change__location'>CHANGE</p>
                </div>
            </div>
            <div className='account__sections'>
                <Link to="/orders" className='link'>
                    <div className='account__section'>
                        <p> <span><ShoppingBagIcon className='account__section__icon' /></span> My Orders </p>
                    </div>
                </Link>
                <Link to="/address" className="link">
                <div className='account__section'>
                    <p> <span><AccountBalanceWalletIcon className='account__section__icon' /></span> Address </p>
                </div>
                </Link>
                <div className='account__section'>
                    <p> <span><HelpIcon className='account__section__icon' /></span> Help & Support </p>
                </div>
                <div className='account__section account__section__logout'>
                    <p> <span><PowerSettingsNewIcon className='account__section__icon account__section__icon__logout' /></span> Logout </p>
                </div>
            </div>
            
            <LocationDrawer locationDraweropen={locationDraweropen} toggleLocationDrawer={toggleLocationDrawer} />
        </div>
    )
}

export default MobileAccount
