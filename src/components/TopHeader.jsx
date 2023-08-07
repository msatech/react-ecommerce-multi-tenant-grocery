import React, { useState, useEffect } from 'react'
import './TopHeader.css'
import { useSelector } from "react-redux"

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import MicIcon from '@mui/icons-material/Mic';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Cart from './Cart/Cart';
import LoginModal from '../components/LoginModal/LoginModal'
import SearchComponent from './SearchComponent/SearchComponent';
import LocationDrawer from './LocationDrawer/LocationDrawer';

import { Link } from "react-router-dom";

import { useGetAllProductsQuery } from '../Store/features/products/productsApi'

// For advanced Filtering using fuse library
import Fuse from 'fuse.js'
import { toast } from "react-toastify";
// Firebase auth
import { authentication } from '../firebase'

import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

import audioWave from '../assets/audio-wave.gif';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


function TopHeader() {
    let useruuid = localStorage.getItem("user-uid")
    const [expanded, setExpanded] = useState(false);

    function expand() {
        setExpanded(true);
    }

    function close() {
        setExpanded(false);
    }

    
    // Search Through Voice
    const [searchvalue, setSearchvalue] = useState('')
    const [ripple, setRipple] = useState(false)


    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    useEffect(() => {
        if (transcript !== '') {
            setSearchvalue(transcript)
            FindSearchResult(transcript);
        }
        if (listening) {
            setRipple(true)

        } else {
            setRipple(false)

        }
    }, [transcript, listening]);

    // Speech Recognisation Code



    

    const onSearch = value => console.log(value);


    // End search throug web

    const [searchproducts, setSearchproducts] = useState([])

    const cart = useSelector((state) => state.cart);
    const { data: products = [], isFetching, error } = useGetAllProductsQuery();

    // Distructuring Store Details
    const storedetails = useSelector((state) => state.storedetails?.storeDetails?.storeDetails);


    // End Store details 



    // Fuse Setting 

    const options = {
        includeScore: true,
        // Search in `author` and in `tags` array
        keys: ['category', 'title']
    }


    const fuse = new Fuse(products, options)


    const FindSearchResult = (value) => {
        const result = fuse.search(value)
        setSearchproducts(result)
    }

    // Handle Search result

    const handleSearchResult = (e) => {
        setSearchvalue(e.target.value)
        FindSearchResult(e.target.value)
    }


    // End

    // Login Modal Settings

    const [open, setOpen] = useState(false);
    const [phonenumber, setPhonenumber] = useState("");
    const [otp, setOtp] = useState(null);
    const [show, setShow] = useState(false)
    const [disable, setDisable] = useState(true)



    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    // firebase login
    const generateRecaptcha = () => {
        window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {

        }, authentication);
    }


    useEffect(() => {
        let useruid = localStorage.getItem("user-uid")

        if (!useruid) {
            handleClickOpen()

        }

        if (phonenumber.length === 12) {
            setDisable(false)
        }
        else {
            setDisable(true)

        }
    }, [phonenumber]);


    const handlePhoneChange = (value) => {
        setPhonenumber(value)
    }


    const GetOtp = () => {
        if (!phonenumber.length === 10) {
            setDisable(false)
        }
        else {

            generateRecaptcha()
            let appVerifier = window.recaptchaVerifier;
            signInWithPhoneNumber(authentication, "+" + phonenumber, appVerifier)
                .then(confirmationResult => {

                    window.confirmationResult = confirmationResult;
                    setShow(true)
                })
                .catch((error) => {
                    console.log(error)
                })
        }

    }

    const VerifyOtp = (e) => {
        let otp = e.target.value;
        setOtp(otp);
        if (otp.length === 6) {
            let confirmationResult = window.confirmationResult;
            confirmationResult.confirm(otp).then((result) => {
                // User signed in successfully.
                const user = result.user;
                localStorage.setItem("user-uid", user.uid)
                toast.success(`Sign In Successfully`, {
                    position: "top-right",
                })
                setOpen(false);
                // ...
            }).catch((error) => {
                // User couldn't sign in (bad verification code?)
                // ...
                console.log(error)
            });
        }
    }


    const GoBackPhoneFiled = () => {
        setShow(false)
    }


    const values = { phonenumber, open, show, disable, otp }


    // End Login Modal 


    // Cart Drawer Setting

    const [draweropen, setDraweropen] = useState(false)

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setDraweropen(open);
    };


    // End cart Drawer Setting


    // Location Drawer setting

    const [locationDraweropen, setLocationDraweropen] = useState(false)

    const location = useSelector((state) => state.location.location)

    const toggleLocationDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setLocationDraweropen(open);
    };

    // End Location Drawer setting


    return (
        <div className='main__header'>
            <div className='main__header__left'>
                {
                    storedetails ? (
                        <>
                            {
                                storedetails.storeName === "Alpha Store" ? <img src="https://www.alphacs.in/static/alphacs/images/alphaimg/alphafull.svg" alt="" width="140" />
                                    : <h2 className='store__name'>{storedetails.storeName}</h2>
                            }

                        </>
                    ) :
                        <img src="https://www.alphacs.in/static/alphacs/images/alphaimg/alphafull.svg" alt="" width="140" />
                }
                <p onClick={toggleLocationDrawer(true)}><span> <LocationOnIcon className="location__icon" /></span> {location.locality || "Select location"}</p>
            </div>
            <div className='main__header__center'>
                <div className='search__section'>
                    <input type="text" placeholder='Find Fresh Vegitable, dairy..' onFocus={expand} value={searchvalue} onChange={handleSearchResult} />
                    {
                        !ripple ?
                            <MicIcon className="searchicon" onClick={SpeechRecognition.startListening} />
                            :
                            <img style={{ height: "30px" }} src={audioWave} />

                    }
                    {/* Search Result Section */}
                    {expanded ? (
                        <>


                            {
                                searchproducts.length === 0 ? (
                                    null
                                )

                                    : (
                                        <div className='search__field__result'>
                                            {
                                                searchproducts?.map(searchItem => (
                                                    <SearchComponent searchItem={searchItem} key={searchItem.id} />

                                                ))
                                            }
                                        </div>


                                    )
                            }


                        </>
                    ) : null}

                    {/* End search Result section */}
                </div>

            </div>
            <div className='main__header__right'>
                <div className='cart__section' onClick={toggleDrawer(true)}>
                    <IconButton> <Badge badgeContent={cart.cartItems.length} className="cart__badge" color="primary"><ShoppingCartIcon className="carticon" /></Badge></IconButton>
                    <p>cart</p>
                </div>
                {/* <div className='credit__section'>
                    <IconButton><AccountBalanceWalletIcon className='crediticon' /></IconButton>
                    <p>Wallet</p>
                </div> */}
                {
                    !useruuid ?
                        <div className='login__section'>
                            <IconButton onClick={handleClickOpen}><PersonIcon className='loginicon' /></IconButton>
                            <p>Login</p>
                        </div>
                        :
                        <div className='myaccount__section'>
                            <Link className='link' to="/myaccount">
                                <IconButton><PersonIcon className='loginicon' /></IconButton>
                                <p>Account</p>
                            </Link>
                        </div>

                }
                {/* <Cart /> */}

                <Cart draweropen={draweropen} toggleDrawer={toggleDrawer} />
                <LocationDrawer locationDraweropen={locationDraweropen} toggleLocationDrawer={toggleLocationDrawer} />

            </div>



            {/* Login Modal */}
            {
                !useruuid ?
                    <LoginModal className="login__modal__section" VerifyOtp={VerifyOtp} handlePhoneChange={handlePhoneChange} GetOtp={GetOtp} values={values} GoBackPhoneFiled={GoBackPhoneFiled} handleClose={handleClose} handleClickOpen={handleClickOpen} />
                    : null
            }
        </div>
    )
}

export default TopHeader
