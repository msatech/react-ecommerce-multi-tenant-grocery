import React from 'react'
import Address from '../Address/Address'
import BackButtonHeader from '../BackButtonHeader/BackButtonHeader'
import Footer from '../Footer/Footer'
import MobileFooter from '../MobileFooter/MobileFooter'
import Orders from '../Myaccount/Orders'
import TopHeader from '../TopHeader'
import './MobileAddress.css'

const MobileAddress = () => {
    return (
        <>

            <div className="header">
                <TopHeader handleClickOpen />

            </div>
            <div className='mobileheader__section'>
                <BackButtonHeader backText="Address" />
            </div>

            <div className='mobileaddress__container'>
                <Address />

            </div>
            <div className='mobile__footer__section'>
                <MobileFooter />
            </div>

            <div className='footer__section'>
                <Footer />
            </div>

        </>
    )
}

export default MobileAddress