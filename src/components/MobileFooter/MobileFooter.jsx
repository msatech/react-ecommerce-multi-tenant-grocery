import React, { useState } from 'react'
import './MobileFooter.css'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom'

function MobileFooter() {
    const [activeMenu, setActiveMenu] = useState('home')

    return (
        <div className='mobilefooter'>
            <div className='mobilefooter__items'>
                <Link to="/" className='link'><div className='mobilefooter__item' onClick={() => { setActiveMenu('home') }} ><HomeOutlinedIcon className={activeMenu === 'home' ? 'mobile__Footer__icon active': 'mobile__Footer__icon'} /> <p>Home</p> </div></Link>

                <Link to="/search" className='link'>
                <div className='mobilefooter__item' onClick={() => { setActiveMenu('search') }}><SearchOutlinedIcon className={activeMenu === 'search' ? 'mobile__Footer__icon active': 'mobile__Footer__icon'} /> <p>Search</p> </div>
                </Link>
                
                <Link to="/cart" className='link'>
                <div className='mobilefooter__item' onClick={() => { setActiveMenu('reffer') }}><ShoppingCartOutlinedIcon className={activeMenu === 'reffer' ? 'mobile__Footer__icon active': 'mobile__Footer__icon'} /> <p>Cart</p> </div>
                </Link>
                
                <Link to="/myaccount" className='link'><div className='mobilefooter__item' onClick={() => { setActiveMenu('account') }}><PersonOutlineOutlinedIcon className={activeMenu === 'account' ? 'mobile__Footer__icon active': 'mobile__Footer__icon'} /> <p>Account</p> </div></Link>
            </div>
        </div>
    )
}

export default MobileFooter
