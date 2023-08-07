import React from 'react'
import Footer from '../components/Footer/Footer'
import TopHeader from '../components/TopHeader'
import './Myaccount.css'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
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


const accountimage = "https://rkvosngb4nilhv5vpgezpoosgupgg75sf3kuyzxrgwyasb2t.arweave.net/iqrpNMHjULPXt-XmJl7nSNR5jf7Iu1_Uxm8TWwCQdT0/?ext=png"

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }} >
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}


TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {

    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}


export default function Myaccount() {



    const [value, setValue] = React.useState(1);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (

        <div className='myaccount'>
            <div className="header">
                <TopHeader handleClickOpen />

            </div>

            <div className='mobileheader__section'>
                <BackButtonHeader backText="My Account" />
            </div>

            <div className='myaccount__container'>
                <div className="myaccount__container__web">
                    <Box
                        sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: "100%" }}

                    >
                        <Tabs

                            orientation="vertical"
                            variant="scrollable"
                            value={value}
                            onChange={handleChange}
                            aria-label="Vertical tabs example"

                            className="tabs__container"
                        >
                            <div class="user__info__logo">
                                <img src={accountimage} />
                                <p>+91 9717418634 <span><ModeEditOutlineOutlinedIcon className="editicon" /></span> </p>
                            </div>
                            <Tab className="tab__section" label="My Orders"  {...a11yProps(0)} icon={<LocalMallOutlinedIcon className="myprofile__icon" />} />
                            <Tab className="tab__section" label="My Wallet" {...a11yProps(1)} icon={<AccountBalanceWalletOutlinedIcon className="myprofile__icon" />} />
                            <Tab className="tab__section" label="Invite A Friend" {...a11yProps(2)} icon={<PeopleOutlineOutlinedIcon className="myprofile__icon" />} />
                            <Tab className="tab__section" label="Help Support" {...a11yProps(3)} icon={<HelpOutlineOutlinedIcon className="myprofile__icon" />} />
                            <Tab className="tab__section tab__section__logout" label="Logout" {...a11yProps(4)} icon={<ExitToAppOutlinedIcon className="myprofile__icon" />} />

                        </Tabs>
                        {/* <TabPanel value={value} index={0}>
                    </TabPanel> */}
                        <TabPanel className="amyaccount__container" value={value} index={1}>
                            <h2 className='myaccount__title'>Your Orders</h2>
                            <Orders />
                        </TabPanel>
                        <TabPanel className="amyaccount__container" value={value} index={2}>
                            <h2 className='myaccount__title'>Your Wallet</h2>

                        </TabPanel>
                        <TabPanel className="amyaccount__container" value={value} index={3}>
                            <h2 className='myaccount__title'>Invite A Friend</h2>
                            <InviteFriend />
                        </TabPanel>
                        <TabPanel className="amyaccount__container" value={value} index={4}>
                            <h2 className='myaccount__title'>Help and Support</h2>


                        </TabPanel>


                    </Box>
                </div>



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

