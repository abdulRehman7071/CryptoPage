import "./Sidebar.scss";
import React, { useContext } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { FaTelegramPlane, FaRedditAlien } from "react-icons/fa";
import { Theme } from '../../App'
const Sidebar = () => {
    const { darkMode } = useContext(Theme)
    return (
        <div className={`leftWrapper ${darkMode && 'darkBg'}`}>

            <div className="logoContainer">
                {
                    darkMode ? <svg width="20" height="33" viewBox="0 0 20 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8796 23.9966C15.8949 23.9876 15.9043 23.9711 15.9042 23.9534L15.8841 17.1087L17.8808 16.0589L17.9633 25.1284L10.0904 29.6033L10.0843 27.4072L15.8796 23.9966Z" fill="white" stroke="black" stroke-width="0.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.9791 15.9776C17.9789 15.9592 17.9687 15.9424 17.9524 15.9338L11.8424 12.7014L14.1202 11.4117L19.9173 15.0419L19.9491 26.0024L18.0623 25.1268L17.9791 15.9776Z" fill="white" stroke="black" stroke-width="0.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.0107 2.45104L10.0011 0.0862005L19.8909 5.71654L19.8978 7.97072L10.0107 2.45104Z" fill="white" stroke="black" stroke-width="0.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1.84402 6.96403C1.82827 6.97284 1.81849 6.98945 1.81843 7.00749L1.78731 15.9986L0.0836643 17.2571L0.0500845 5.83066L9.90092 0.086827L9.91054 2.45121L1.84402 6.96403Z" fill="white" stroke="black" stroke-width="0.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.0645 29.735L18.015 25.216L19.8922 26.0872L9.98967 31.9442L0.159879 26.3675L8.00023 21.7696C8.01575 21.7605 8.02518 21.7437 8.02493 21.7258C8.02468 21.7078 8.01479 21.6913 7.99903 21.6826L5.91954 20.5388L5.91954 20.5388L0.125712 17.3513L1.83997 16.085L11.7794 21.7635L5.88581 25.0879L5.88556 25.0881L3.88524 26.2009C3.86942 26.2097 3.85959 26.2263 3.85955 26.2444C3.85951 26.2626 3.86926 26.2793 3.88504 26.2881L10.0152 29.7351C10.0305 29.7437 10.0492 29.7437 10.0645 29.735Z" fill="white" stroke="black" stroke-width="0.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.96091 2.5397L19.8461 8.0583L14.098 11.3115L14.098 11.3115L11.7147 12.6608C11.6988 12.6698 11.6891 12.6868 11.6894 12.705C11.6896 12.7233 11.6999 12.74 11.716 12.7485L17.823 15.9793L15.835 17.0246L7.98808 12.5944L15.8328 7.99657C15.8482 7.98755 15.8576 7.971 15.8575 7.95315C15.8574 7.9353 15.8478 7.91886 15.8323 7.91001L13.9428 6.83163L9.9921 4.57667C9.97672 4.56789 9.95784 4.5679 9.94247 4.5767L4.08196 7.93114L1.98054 7.00433L9.96091 2.5397Z" fill="white" stroke="black" stroke-width="0.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.98402 27.4101L9.99012 29.6052L4.01259 26.244L5.91097 25.1879L9.98402 27.4101Z" fill="white" stroke="black" stroke-width="0.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5.89652 20.6393L7.87447 21.7273L0.110307 26.2805L0.103309 23.9145L5.89652 20.6393Z" fill="white" stroke="black" stroke-width="0.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13.9176 6.93242L15.7075 7.95396L7.93858 12.5074L7.96126 10.2597L13.9176 6.93242Z" fill="white" stroke="black" stroke-width="0.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4.05454 15.0565C4.05459 15.0746 4.06449 15.0913 4.08039 15.1001L11.8238 19.3703L11.8308 21.6722L1.88701 15.9912L1.91785 7.08049L4.03444 8.014L4.05454 15.0565Z" fill="white" stroke="black" stroke-width="0.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg> :

                        <svg
                            width="20"
                            height="33"
                            viewBox="0 0 20 33"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M15.8796 23.9966C15.8949 23.9876 15.9043 23.9711 15.9042 23.9534L15.8841 17.1087L17.8808 16.0589L17.9633 25.1284L10.0904 29.6033L10.0843 27.4072L15.8796 23.9966Z"
                                fill="black"
                                stroke="white"
                                stroke-width="0.1"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></path>
                            <path
                                d="M17.9791 15.9776C17.9789 15.9592 17.9687 15.9424 17.9524 15.9338L11.8424 12.7014L14.1202 11.4117L19.9173 15.0419L19.9491 26.0024L18.0623 25.1268L17.9791 15.9776Z"
                                fill="black"
                                stroke="white"
                                stroke-width="0.1"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></path>
                            <path
                                d="M10.0107 2.45104L10.0011 0.0862005L19.8909 5.71654L19.8978 7.97072L10.0107 2.45104Z"
                                fill="black"
                                stroke="white"
                                stroke-width="0.1"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></path>
                            <path
                                d="M1.84402 6.96403C1.82827 6.97284 1.81849 6.98945 1.81843 7.00749L1.78731 15.9986L0.0836643 17.2571L0.0500845 5.83066L9.90092 0.086827L9.91054 2.45121L1.84402 6.96403Z"
                                fill="black"
                                stroke="white"
                                stroke-width="0.1"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></path>
                            <path
                                d="M10.0645 29.735L18.015 25.216L19.8922 26.0872L9.98967 31.9442L0.159879 26.3675L8.00023 21.7696C8.01575 21.7605 8.02518 21.7437 8.02493 21.7258C8.02468 21.7078 8.01479 21.6913 7.99903 21.6826L5.91954 20.5388L5.91954 20.5388L0.125712 17.3513L1.83997 16.085L11.7794 21.7635L5.88581 25.0879L5.88556 25.0881L3.88524 26.2009C3.86942 26.2097 3.85959 26.2263 3.85955 26.2444C3.85951 26.2626 3.86926 26.2793 3.88504 26.2881L10.0152 29.7351C10.0305 29.7437 10.0492 29.7437 10.0645 29.735Z"
                                fill="black"
                                stroke="white"
                                stroke-width="0.1"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></path>
                            <path
                                d="M9.96091 2.5397L19.8461 8.0583L14.098 11.3115L14.098 11.3115L11.7147 12.6608C11.6988 12.6698 11.6891 12.6868 11.6894 12.705C11.6896 12.7233 11.6999 12.74 11.716 12.7485L17.823 15.9793L15.835 17.0246L7.98808 12.5944L15.8328 7.99657C15.8482 7.98755 15.8576 7.971 15.8575 7.95315C15.8574 7.9353 15.8478 7.91886 15.8323 7.91001L13.9428 6.83163L9.9921 4.57667C9.97672 4.56789 9.95784 4.5679 9.94247 4.5767L4.08196 7.93114L1.98054 7.00433L9.96091 2.5397Z"
                                fill="black"
                                stroke="white"
                                stroke-width="0.1"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></path>
                            <path
                                d="M9.98402 27.4101L9.99012 29.6052L4.01259 26.244L5.91097 25.1879L9.98402 27.4101Z"
                                fill="black"
                                stroke="white"
                                stroke-width="0.1"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></path>
                            <path
                                d="M5.89652 20.6393L7.87447 21.7273L0.110307 26.2805L0.103309 23.9145L5.89652 20.6393Z"
                                fill="black"
                                stroke="white"
                                stroke-width="0.1"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></path>
                            <path
                                d="M13.9176 6.93242L15.7075 7.95396L7.93858 12.5074L7.96126 10.2597L13.9176 6.93242Z"
                                fill="black"
                                stroke="white"
                                stroke-width="0.1"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></path>
                            <path
                                d="M4.05454 15.0565C4.05459 15.0746 4.06449 15.0913 4.08039 15.1001L11.8238 19.3703L11.8308 21.6722L1.88701 15.9912L1.91785 7.08049L4.03444 8.014L4.05454 15.0565Z"
                                fill="black"
                                stroke="white"
                                stroke-width="0.1"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></path>
                        </svg>
                }
                <h1>Stader</h1>
            </div>
            <div className={`bnbMenu ${darkMode && 'dark'}`}>
                <div>
                    <img src="/assests/bnb-bnb-logo.svg" alt="bnb logo" />
                    <h3>BNB</h3>
                </div>
                <ul>
                    <li>Stake</li>
                    <li>
                        DeFi<span>NEW</span>
                    </li>
                    <li>Portfolios</li>
                </ul>
            </div>
            <div className="liquidStacking">
                <p>EXPLORE LIQUID STAKING</p>
                <Stack url="/assests/hedera.svg" title="Hedera" darkMode={darkMode} />
                <Stack url="/assests/polygon.svg" title="Polygon" darkMode={darkMode} />
                <Stack url="/assests/fantom.svg" title="Fantom" darkMode={darkMode} />
                <Stack url="/assests/near.svg" title="Near" darkMode={darkMode} />
                <Stack url="/assests/terra.svg" title="Tera" darkMode={darkMode} />
            </div>

            <div className={`aboutBnbx ${darkMode && 'darkBg'}`}>
                <p>Everything about BNBx</p>
                <button className={darkMode && 'darkBg whiteBorder darkFont'}>Learn more</button>
            </div>
            <div className={`communityBox ${darkMode && 'darkBg'}`}>
                <p>Join our Community</p>
                <div className={darkMode && 'darkGrayFont'}>
                    <BsTwitter />
                    <FaTelegramPlane />
                    <GrMail />
                    <FaRedditAlien />
                </div>
            </div>
        </div>
    );
};
const Stack = ({ url, title, darkMode }) => {
    return (
        <div className="stackIcons">
            <div className={`stackImage `} >
                <span>
                    <img src={url} alt="" />
                </span>

                <h5 className={darkMode && 'darkFont'}>{title}</h5>
            </div>
            <div>
                <AiOutlineRight size={10} />
            </div>
        </div>
    );
};
export default Sidebar;
