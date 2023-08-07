import React from 'react'
import './MobileHeader.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';


function MobileHeader() {
    return (
        <div className='mobileheader'>
            <div className='mobileheader__location'>
                
                <p><span><LocationOnIcon className="location__icon" /></span> Delhi</p>
            </div>
        </div>
    )
}

export default MobileHeader
