import React from 'react'

import './ProductCarousel.css'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Separator from '../Separator/Separator';
import AppCard from '../AppCard/AppCard'


import { Link } from "react-router-dom";


const ProductCarousel = ({ title, Products, viewall }) => {



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

    const element = 8;
    return (
        <div className="productcarousel">
            <div className="productcarousel__header">
                <div><h2>{title}</h2> {viewall && <span>( View all )</span>} </div>



            </div>
            <Separator />
            <div className='itemslider'>
                <OwlCarousel  {...options} className='owl-theme' nav>

                    {
                        Products.map(product => (

                            // <Link to={`/viewproduct/${product.category}/${product.id}`} className="link">
                            //     <div class='item'>
                            //         <AppCard product={product} key={product.id} />
                            //     </div>

                            // </Link>

                            <div class='item'>
                                <AppCard product={product} key={product.id} />
                            </div>



                        ))
                    }

                </OwlCarousel>
            </div>

        </div>
    )
}

export default ProductCarousel
