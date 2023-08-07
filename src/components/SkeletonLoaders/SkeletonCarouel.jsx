import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ProductSkeleton from './ProductSkeleton';

function SkeletonCarouel() {
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
            0: { items: 2, margin: 10 },
            575: { items: 2 },
            768: { items: 3 },
            991: { items: 4 },
            1199: { items: 4 },
            1290: { items: 5 }
        }
    }

    return (
        <div>
            <OwlCarousel  {...options} className='owl-theme' nav>

                <div class='item'>
                    <ProductSkeleton />
                </div>
                <div class='item'>
                    <ProductSkeleton />
                </div>
                <div class='item'>
                    <ProductSkeleton />
                </div>
                <div class='item'>
                    <ProductSkeleton />
                </div>
                <div class='item'>
                    <ProductSkeleton />
                </div>
                <div class='item'>
                    <ProductSkeleton />
                </div>
                <div class='item'>
                    <ProductSkeleton />
                </div>
                <div class='item'>
                    <ProductSkeleton />
                </div>
                <div class='item'>
                    <ProductSkeleton />
                </div>
            </OwlCarousel>
        </div>
    )
}

export default SkeletonCarouel
