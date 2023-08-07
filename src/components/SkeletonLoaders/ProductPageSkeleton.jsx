import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import './SkeletonLoader.css'

function ProductPageSkeleton() {
    return (
        <div className='productviewSkleton'>
            <div style={{width: "50%"}}> 
                <Skeleton
                    inline
                    width="100%"
                    height={250}
                />
            </div>
            <div style={{width: "50%"}}> 
                <Skeleton
                    inline
                    width="100%"
                    count={5}
                />
                <Skeleton
                    inline
                    width="100%"
                    height={20}
                    
                />
            </div>
        </div>
    )
}

export default ProductPageSkeleton
