import React, { useState } from 'react'
import Footer from '../components/Footer/Footer'
import TopHeader from '../components/TopHeader'
import './Myaccount.css'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import InviteFriend from '../components/Myaccount/InviteFriend';
import BackButtonHeader from '../components/BackButtonHeader/BackButtonHeader'
import MobileAccount from '../components/MobileAccount/MobileAccount';
import MobileFooter from '../components/MobileFooter/MobileFooter';
import Orders from '../components/Myaccount/Orders'
import Avatar from '@mui/material/Avatar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import AccountData from './AccountData';

const accountimage = "https://rkvosngb4nilhv5vpgezpoosgupgg75sf3kuyzxrgwyasb2t.arweave.net/iqrpNMHjULPXt-XmJl7nSNR5jf7Iu1_Uxm8TWwCQdT0/?ext=png"

export default function Myaccount() {

    let { path, url } = useRouteMatch();

    const [activetab, setActivetab] = useState('my-orders')

    const handleActiveTab = (tabname) => {
        if(!tabname){
        setActivetab('my-orders')

        }
        else{

            setActivetab(tabname)
        }
    }

    return (
        <div className='myaccount'>
            <div className="header">
                <TopHeader handleClickOpen />

            </div>
            <div className='mobileheader__section'>
                <BackButtonHeader backText="My Account" />
            </div>


            <div className='myaccount__container'>
                <Router>
                    <div className='myaccount__container__web'>
                        <div className='left__navigation'>
                            <div className='user__avatar__section'>
                                <Avatar sx={{ bgcolor: "white" }} className='user__image' alt="Remy Sharp" src="https://rkvosngb4nilhv5vpgezpoosgupgg75sf3kuyzxrgwyasb2t.arweave.net/iqrpNMHjULPXt-XmJl7nSNR5jf7Iu1_Uxm8TWwCQdT0/?ext=png" />
                                <p>+91 9717418634 <span><ModeEditOutlineOutlinedIcon className='editicon' /></span> </p>
                            </div>
                            <div className='navigation__items'>
                                <Link to={`${url}/my-orders`} className='link'>
                                    <div className={`navigation__item ${activetab === 'my-orders' ? 'active' : null}`}>
                                        <span><LocalMallOutlinedIcon className="myprofile__icon" /></span><p> My Orders </p>
                                    </div>
                                </Link>
                                <Link to={`${url}/address`} className="link" >
                                    <div className={`navigation__item ${activetab === 'address' ? 'active' : null}`}>
                                        <span><AccountBalanceWalletOutlinedIcon className="myprofile__icon" /></span><p> Address </p>
                                    </div>
                                </Link>

                                <Link to={`${url}/help-support`} className='link'>
                                    <div className={`navigation__item ${activetab === 'help-support' ? 'active' : null}`}>
                                        <span><HelpOutlineOutlinedIcon className="myprofile__icon" /></span><p> Help Support </p>
                                    </div>
                                </Link>
                                <div className='navigation__item navigation__item__logout'>
                                    <span><ExitToAppOutlinedIcon className="myprofile__icon" /></span><p> Logout </p>
                                </div>

                            </div>
                        </div>
                        <div className='right__container'>
                            <Switch>
                                <Route exact path={`${path}`}>
                                    <AccountData handleActiveTab={handleActiveTab} />
                                </Route>
                                <Route path={`${path}/:accountData`}>
                                    <AccountData handleActiveTab={handleActiveTab} />
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </Router>
                <div className='myaccount__container__mobile'>
                    <MobileAccount />
                </div>
                <div className='mobile__footer__section'>
                    <MobileFooter />
                </div>
            </div>


            <div className='footer__section'>
                <Footer />
            </div>
        </div>
    )
}

