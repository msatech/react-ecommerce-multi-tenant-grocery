import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import './LoginModal.css'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';


import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


export default function LoginModal({ GetOtp, handleClose, handleClickOpen, GoBackPhoneFiled, handlePhoneChange, values  }){
    // console.log(props)
    // const [open, setOpen] = useState(false);
    // const [phonenumber, setPhonenumber] = useState("");
    // const [show, setShow] = useState(false)
    // const [ disable, setDisable ] = useState(true)

    // const handleClickOpen = () => {
    //     setOpen(true);
    // };

    // const handleClose = () => {
    //     setOpen(false);
    // };

    // useEffect(() => {
    //     handleClickOpen()
    //     if(phonenumber.length === 10){
    //         setDisable(false)
    //     }
    //     else{
    //         setDisable(true)
    //     }
    // }, [phonenumber]);


    
    // const GetOtp = () => {
    //     if(!phonenumber.length === 10){
    //         setDisable(false)
    //     }
    //     else{
    //         setShow(true)
    //     }
        
    // }


    // const GoBackPhoneFiled = () => {
    //     setShow(false)
    // }


    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));






    return (
        <div className='loginmodal'>

            <Dialog open={values.open} onClose={handleClose} fullScreen={fullScreen} className="login__dialog">
                <DialogTitle className="login__dialog__title">Welcome to Alpha Store  <IconButton onClick={handleClose} className="login__dialog__close__btn"><CloseOutlinedIcon /></IconButton>  <br />
                    <DialogContentText className="login__dialog__top__text">
                        Sign In to track your Order and More.
                    </DialogContentText>
                </DialogTitle>

                {
                    !values.show && (
                        <DialogContent className="login__dialog__phonefield">

                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Phone Number"
                                type="phone"
                                fullWidth
                                defaultValue={values.phonenumber}
                                inputProps={{ maxLength: 10 }}
                                variant="standard"
                                onChange={handlePhoneChange}
                            />
                            <DialogContentText className="login__dialog__bottom__text">
                                We will send you an OTP on this number
                            </DialogContentText>
                        </DialogContent>
                    )
                }


               



                {
                    values.show && (
                        <DialogContent className="login__dialog__otp">
                            <DialogContentText className="login__dialog__otp__top__text">
                                <IconButton className="otp__back__btn" onClick={GoBackPhoneFiled}><ArrowBackIosNewOutlinedIcon className='otp__back__btn__icon' /> </IconButton>  Enter 6-Digit OTP
                            </DialogContentText>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                helperText=""
                                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }, {maxLength: 6}}
                                type="text"
                                fullWidth
                                variant="standard"
                        
                            />
                            <div className='login__dialog__otp__bottom__section'>
                                <DialogContentText className="login__dialog__bottom__text">
                                    Haven't received your OTP yet?
                                </DialogContentText>
                                <a href="">Resend</a>
                            </div>

                        </DialogContent>
                    )
                }


                <DialogActions className="login__dialog__btn__section">

                    {
                        !values.show && (
                            <Button onClick={GetOtp} disabled={values.disable} className="login__dialog__btn">Get OTP</Button>
                        )
                    }
                    {
                        values.show && (
                            <Button onClick={handleClose} className="login__dialog__btn">Continue</Button>
                        )
                    }
                </DialogActions>
            </Dialog>
        </div>
    );
}
