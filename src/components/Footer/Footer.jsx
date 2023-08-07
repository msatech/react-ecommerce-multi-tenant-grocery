import React from 'react'
import Separator from '../Separator/Separator'
import './Footer.css'


function Footer() {
    return (
        <>
        {/* <div className='footer_bg'></div> */}
        <div className='footer'>
            <div className='footer__container'>
                <div className='footer__container__section section1'>
                    <img src="https://www.alphacs.in/static/alphacs/images/alphaimg/alphafull.svg" alt="logo" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex modi pariatur harum vitae </p>
                </div>
                <div className='footer__container__section section2'>
                    <h2>UseFul Links</h2>
                    <p>Privacy Policy</p>
                    <p>FAQ</p>
                    <p>Terms and Condition</p>
                </div>
                <div className='footer__container__section section3'>
                <h2>Cities We Serve</h2>
                    <p>Mumbai</p>
                    <p>Hyderabad</p>
                    <p>Bangalore</p>
                    <p>Pune</p>
                </div>
                <div className='footer__container__section section4'>
                <h2>Connect with us</h2>
                    <p>support@alphacs.in</p>
                    <p>+91 789845XXXX</p>

                    <h2 style={{marginTop:"15px"}}>Download The App</h2>
                    <div className='playstore'>
                        <img src="https://www.thestudyias.net/static/frontend/img/playstore1.png" alt="" />
                    </div>
                </div>
            </div>
            <Separator />
            <div className='copyright__section'>
                <p style={{textAlign:"center"}}>© Copyrights 2021 - 2022. alphacs. All Rights Reserved.</p>
            </div>
        </div>
        </>
    )
}

export default Footer
