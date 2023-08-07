import React from 'react'
import './BannerSlider.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function BannerSlider() {
    const options = {
		loop:true,
		autoplay:true,
		autoplayTimeout:6000,
		nav:false,
		dots:true,
		lazyLoad:true,
		margin:15,
		animateOut: 'fadeOut',
		responsive:
		{
		0:{items:1},
		575:{items:1},
		768:{items:1},
		991:{items:1},
		1199:{items:1}
		}
	}

    return (
        <div className="bannerslider">
            <OwlCarousel  {...options} className='owl-theme'  nav>

                <div class='item'>
                    <img src="https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/mainbanners/2021-12-17/House-Full-Sale-FMCG.jpg" alt="services-banner" />
                </div>
                <div class='item'>
                    <img src="https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/mainbanners/2021-12-9/fresh-atta-Banner.jpg" alt="services-banner2" />
                </div>

            </OwlCarousel>
        </div>
    )
}

export default BannerSlider
