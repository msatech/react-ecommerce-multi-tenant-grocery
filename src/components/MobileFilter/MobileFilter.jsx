import React from 'react'
import './MobileFilter.css';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
function MobileFilter({closeOffersDrawer}) {
    return (
        <div className="offersdrawer">
            <div className="offersdrawer__top">
                <div className="offersdrawer__top__left">
                    <KeyboardBackspaceIcon onClick={closeOffersDrawer} className="offersdrawer__top__left__backicon" />
                    <p>Ofers</p>f
                </div>
                <div className="offersdrawer__top__right">
                    <img src="https://www.riverchasechurch.org/wp-content/uploads/2019/12/4240519-gift.png" alt="gift-icon" />
                </div>
            </div>

            <div className="offersdrawer__offers__section">
                <div className="offersdrawer__offers__section__offer__item">
                    <div className="offersdrawer__offers__section__offer__item__img">
                        <img src="https://cdn.dotpe.in/cfe/image/mobikwik.png" alt="mobikwik" />
                    </div>
                    <div className="offersdrawer__offers__section__offer__item__info">
                        <p className="offersdrawer__offers__section__offer__item__info__name">
                            Upto Rs 500 Cashback
                        </p>
                        <p className="offersdrawer__offers__section__offer__item__info__offer__amount">
                            min order - ₹300
                        </p>
                    </div>
                </div>

                <div className="offersdrawer__offers__section__offer__item">
                    <div className="offersdrawer__offers__section__offer__item__img">
                        <img src="https://cdn.dotpe.in/cfe/image/lazyPay.png" alt="mobikwik" />
                    </div>
                    <div className="offersdrawer__offers__section__offer__item__info">
                        <p className="offersdrawer__offers__section__offer__item__info__name">
                            Assured 20% Cashback
                        </p>
                        <p className="offersdrawer__offers__section__offer__item__info__offer__amount">
                            min order - ₹100
                        </p>
                    </div>
                </div>
                
                <div className="offersdrawer__offers__section__offer__item">
                    <div className="offersdrawer__offers__section__offer__item__img">
                        <img src="https://cdn.dotpe.in/cfe/image/lazyPay.png" alt="mobikwik" />
                    </div>
                    <div className="offersdrawer__offers__section__offer__item__info">
                        <p className="offersdrawer__offers__section__offer__item__info__name">
                            Upto Rs 1000 Cashback
                        </p>
                        <p className="offersdrawer__offers__section__offer__item__info__offer__amount">
                            min order - ₹300
                        </p>
                    </div>
                </div>

                <div className="offersdrawer__offers__section__offer__item">
                    <div className="offersdrawer__offers__section__offer__item__img">
                        <img src="https://cdn.dotpe.in/cfe/image/paytmOffer.png" alt="mobikwik" />
                    </div>
                    <div className="offersdrawer__offers__section__offer__item__info">
                        <p className="offersdrawer__offers__section__offer__item__info__name">
                            Upto Rs 2500 Cashback Points
                        </p>
                        <p className="offersdrawer__offers__section__offer__item__info__offer__amount">
                            min order - ₹250
                        </p>
                    </div>
                </div>

                <div className="offersdrawer__offers__section__offer__item">
                    <div className="offersdrawer__offers__section__offer__item__img">
                        <img src="https://cdn.dotpe.in/cfe/image/mobikwik.png" alt="mobikwik" />
                    </div>
                    <div className="offersdrawer__offers__section__offer__item__info">
                        <p className="offersdrawer__offers__section__offer__item__info__name">
                            Upto Rs 500 Cashback
                        </p>
                        <p className="offersdrawer__offers__section__offer__item__info__offer__amount">
                            min order - ₹300
                        </p>
                    </div>
                </div>
                
                
            </div>
        </div>
    )
}

export default MobileFilter
