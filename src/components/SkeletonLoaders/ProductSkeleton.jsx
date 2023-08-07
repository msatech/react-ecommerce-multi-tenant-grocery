import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function ProductSkeleton() {
    return (
        <Skeleton
        count={3}
            inline
            width="100%"
            height={250}
        />
    )
}

export default ProductSkeleton
