import React from 'react'
import BackButtonHeader from '../BackButtonHeader/BackButtonHeader'
import Footer from '../Footer/Footer'
import MobileFooter from '../MobileFooter/MobileFooter'
import Orders from '../Myaccount/Orders'
import TopHeader from '../TopHeader'

const MobileOrder = () => {
    return (
        <>

            <div className="header">
                <TopHeader handleClickOpen />

            </div>
            <div className='mobileheader__section'>
                <BackButtonHeader backText="My Orders" />
            </div>

            <div className='myaccount__container'>
                <Orders />
                <div className='mobile__footer__section'>
                    <MobileFooter />
                </div>
            </div>

            <div className='footer__section'>
                <Footer />
            </div>

        </>
    )
}

export default MobileOrder