import React, { useState, useEffect, Suspense } from 'react'
import './Home.css'

import TopHeader from '../components/TopHeader'
// import BannerSlider from '../components/BannerSlider/BannerSlider'
// import HeroCard from '../components/HeroCards/HeroCard'

import ProductCarousel from '../components/ProductCarousel/ProductCarousel'
import OffersSlider from '../components/OffersSlider/OffersSlider'
import CategoryGrid from '../components/CategoryGrid/CategoryGrid'
import MobileHeader from '../components/MobileHeader/MobileHeader'
import Footer from '../components/Footer/Footer'
import MobileFooter from '../components/MobileFooter/MobileFooter'
import { useGetAllProductsQuery, useGetSingleProductsQuery } from '../Store/features/products/productsApi'
import ProductSkeleton from '../components/SkeletonLoaders/ProductSkeleton'
import SkeletonCarouel from '../components/SkeletonLoaders/SkeletonCarouel'
import MobileCartSection from '../components/Cart/MobileCartSection'
import { useDispatch, useSelector } from 'react-redux'
import { getTotal } from '../Store/features/cart/cartSlice'
import BannerSliderSkeleton from '../components/SkeletonLoaders/BannerSliderSkeleton'




const BannerSlider = React.lazy(() => import('../components/BannerSlider/BannerSlider'));
const HeroCard = React.lazy(() => import('../components/HeroCards/HeroCard'));


function Home() {

    const { data, error, isLoading } = useGetAllProductsQuery()

    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    useEffect(() => {
        dispatch(getTotal())
    }, [cart, dispatch])

    return (
        <div>
            <div className="header">
                <TopHeader />

            </div>
            <div className='mobileheader__section'>
                <MobileHeader />
            </div>
            <div className='main__section'>
                <div className='hero__section'>
                    <div className='banners'>
                        <Suspense fallback={<BannerSliderSkeleton height={300} count={1} />}>

                            <BannerSlider />

                        </Suspense>

                    </div>
                    <div className='hero__banner__card'>
                        <Suspense fallback={<BannerSliderSkeleton height={120} count={2} />}>

                            <HeroCard image="https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/mainbanners/2021-12-7/Knoww-Thik-Banner.jpg" />
                            <HeroCard image="https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/mainbanners/2021-12-3/Perfect-Christmas-Store.jpg" />

                        </Suspense>

                    </div>

                </div>
                <div className='offers__section'>

                    <OffersSlider title="Deals Of The Day" />

                </div>
                <div className='prdocuts__sections'>
                    {
                        error ? (
                            <> Error Occured </>
                        ) : isLoading ? (
                            <SkeletonCarouel />
                        ) : data ? (
                            <ProductCarousel title="Latest Offers" Products={data} viewall={false} />

                        ) : null
                    }
                </div>
                <div className='category__section'>
                    <CategoryGrid />
                </div>

                <div className='prdocuts__sections'>
                    {
                        error ? (
                            <> Error Occured </>
                        ) : isLoading ? (
                            <SkeletonCarouel />
                        ) : data ? (
                            <ProductCarousel title="Daily Use Items" Products={data} viewall={true} />

                        ) : null
                    }

                </div>

                <div className='prdocuts__sections'>
                    {
                        error ? (
                            <> Error Occured </>
                        ) : isLoading ? (
                            <SkeletonCarouel />
                        ) : data ? (
                            <ProductCarousel title="Clothes" Products={data} viewall={true} />

                        ) : null
                    }

                </div>

                <div className='prdocuts__sections'>
                    {
                        error ? (
                            <> Error Occured </>
                        ) : isLoading ? (
                            <SkeletonCarouel />
                        ) : data ? (
                            <ProductCarousel title="Electronics & Communication" Products={data} viewall={true} />

                        ) : null
                    }

                </div>

                <div className='prdocuts__sections'>
                    {
                        error ? (
                            <> Error Occured </>
                        ) : isLoading ? (
                            <SkeletonCarouel />
                        ) : data ? (
                            <ProductCarousel title="Men's Jackets" Products={data} viewall={true} />

                        ) : null
                    }

                </div>

                <div className='prdocuts__sections'>
                    {
                        error ? (
                            <> Error Occured </>
                        ) : isLoading ? (
                            <SkeletonCarouel />
                        ) : data ? (
                            <ProductCarousel title="Summer Clothing" Products={data} viewall={true} />

                        ) : null
                    }

                </div>

                <div className='prdocuts__sections'>
                    {
                        error ? (
                            <> Error Occured </>
                        ) : isLoading ? (
                            <SkeletonCarouel />
                        ) : data ? (
                            <ProductCarousel title="Winter Sale" Products={data} viewall={true} />

                        ) : null
                    }

                </div>




            </div>

            <div className='footer__section'>
                <Footer />
            </div>

            {
                cart.cartTotalQuantity === 0 ? (
                    null
                ) : (
                    <div className='mobile__cart__section'>
                        <MobileCartSection />
                    </div>

                )
            }





            <div className='mobile__footer__section'>
                <MobileFooter />
            </div>
        </div>
    )
}

export default Home
