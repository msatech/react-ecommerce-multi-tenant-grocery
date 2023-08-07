import React from 'react'
import './InviteFriend.css'
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import IconButton from '@mui/material/IconButton';

function InviteFriend() {
    return (
        <div className='invitefriend'>
            <p className='invitefriend__heading'>Invite your friend to shop on Fraazo & get ₹100 off on purchased item</p>
            <div className='invitefriend__refferal__code'>
                <p>ALP-HA100  </p>
                <span className="copytoclipboard"><IconButton><ContentCopyOutlinedIcon className='copytoclipboard__icon' /></IconButton></span>
            </div>
        </div>
    )
}

export default InviteFriend
