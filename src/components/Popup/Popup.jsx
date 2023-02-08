import React, { useContext } from 'react'
import './Popup.scss'
import { RxCross2 } from 'react-icons/rx';
import { PopUp, Theme } from '../../App'
const Popup = () => {
    const { setShowPopUp } = useContext(PopUp);
    const { darkMode } = useContext(Theme);
    return (
        <section>
            <div className={`popupWrapper ${darkMode && 'cardBg darkFont'}`}>
                <div className={`popupTitle ${darkMode && ' darkFont'}`}>
                    <h2>
                        Select Wallet
                    </h2>
                    <RxCross2 onClick={() => setShowPopUp(prev => !prev)} />
                </div>
                <form className={darkMode && 'darkBg'}>
                    <input type="checkbox" />
                    <label htmlFor="">I have read and accept <span>Terms of Service</span></label>

                </form>
                <div className={`warning ${darkMode && 'dark'}`}>
                    <ul>
                        <li>
                            For Wallet Connect users, please switch network in the wallet app first and then connect for best experience.
                        </li>
                    </ul>

                </div>
                <div className="walletsWrapper">
                    <div className={`wallet  ${darkMode && 'darkBg darkFont'} `}>
                        <img src="/assests/beefy.png" alt="" />
                        <h3>
                            Beefy waller
                        </h3>
                    </div>
                    <div className={`wallet  ${darkMode && 'darkBg darkFont'} `}>
                        <img src="/assests/beefy.png" alt="" />
                        <h3>
                            Beefy waller
                        </h3>
                    </div>
                    <div className={`wallet  ${darkMode && 'darkBg darkFont'} `}>
                        <img src="/assests/beefy.png" alt="" />
                        <h3>
                            Beefy waller
                        </h3>
                    </div>
                    <div className={`wallet  ${darkMode && 'darkBg darkFont'} `}>
                        <img src="/assests/beefy.png" alt="" />
                        <h3>
                            Beefy waller
                        </h3>
                    </div>
                    <div className={`wallet  ${darkMode && 'darkBg darkFont'} `}>
                        <img src="/assests/beefy.png" alt="" />
                        <h3>
                            Beefy waller
                        </h3>
                    </div>
                    <div className={`wallet  ${darkMode && 'darkBg darkFont'} `}>
                        <img src="/assests/beefy.png" alt="" />
                        <h3>
                            Beefy waller
                        </h3>
                    </div>
                    <div className={`wallet  ${darkMode && 'darkBg darkFont'} `}>
                        <img src="/assests/beefy.png" alt="" />
                        <h3>
                            Beefy waller
                        </h3>
                    </div>
                    <div className={`wallet  ${darkMode && 'darkBg darkFont'} `}>
                        <img src="/assests/beefy.png" alt="" />
                        <h3>
                            Beefy waller
                        </h3>
                    </div>
                    <div className={`wallet  ${darkMode && 'darkBg darkFont'} `}>
                        <img src="/assests/beefy.png" alt="" />
                        <h3>
                            Beefy waller
                        </h3>
                    </div>
                    <div className={`wallet  ${darkMode && 'darkBg darkFont'} `}>
                        <img src="/assests/beefy.png" alt="" />
                        <h3>
                            Beefy waller
                        </h3>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default Popup