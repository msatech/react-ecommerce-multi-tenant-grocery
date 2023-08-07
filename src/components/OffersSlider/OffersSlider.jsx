import React from 'react'

import './OffersSlider.css'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Separator from '../Separator/Separator';


const OffersSlider = ({ title, products }) => {


    const options = {
        loop: false,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 6000,
        nav: false,
        dots: false,
        lazyLoad: true,
        animateOut: true,
        responsive:
        {
            0: { items: 1 },
            575: { items: 2 },
            768: { items: 3 },
            991: { items: 4 },
            1199: { items: 5 }
        }
    }

    const element = 8;
    return (
        <div className="offerscarousel">
            <div className="offerscarousel__header">
                <div><h2>{title}</h2></div>

            </div>
            <Separator />
            <div className='offerslider'>
                <OwlCarousel  {...options} className='owl-theme' nav>


                    <div class='item'>
                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=354,h=221/layout-engine/2021-12/party-store-slider-banner-1.png?61bf2b251a1dd" alt="" />
                    </div>

                    <div class='item'>
                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=354,h=221/layout-engine/2021-12/BBF-masthead-home-feed-slider-2.png?61bf2a4c573d5" alt="" />
                    </div>


                    <div class='item'>
                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=354,h=221/layout-engine/2021-12/christmas-2.png?61bf2b282dc88" alt="" />
                    </div>


                    <div class='item'>
                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=354,h=221/layout-engine/2021-12/washing-machine.png?61bf2a5250855" alt="" />
                    </div>

                    <div class='item'>
                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=354,h=221/layout-engine/2021-12/party-store-slider-banner-1.png?61bf2b251a1dd" alt="" />
                    </div>

                    <div class='item'>
                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=354,h=221/layout-engine/2021-12/christmas-2.png?61bf2b282dc88" alt="" />
                    </div>

                    <div class='item'>
                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=354,h=221/layout-engine/2021-12/washing-machine.png?61bf2a5250855" alt="" />
                    </div>

                    

                </OwlCarousel>
            </div>

        </div>
    )
}

export default OffersSlider
