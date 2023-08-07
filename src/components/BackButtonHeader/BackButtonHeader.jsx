import React from 'react'
import './BackButtonHeader.css'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { useHistory } from "react-router-dom";

function BackButtonHeader({ backText }) {
    const history = useHistory()
    const goBack = () => {
        history.goBack()
    }


    return (
        <div className='mobileheaderback'>

                <p onClick={goBack}><span><ArrowBackOutlinedIcon className="back__icon" /></span> {backText}</p>
            
        </div>
    )
}

export default BackButtonHeader
