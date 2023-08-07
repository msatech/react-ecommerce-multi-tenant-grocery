import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function BannerSliderSkeleton({height, count}) {
    return (
        <Skeleton
            className='bannerSkeleton'
            count={count}
            inline
            width="100%"
            height={height}
            borderRadius={8}
            
        />
    )
}

export default BannerSliderSkeleton
