import "./Header.scss";
import React, { useState, useContext } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdDarkMode } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { PopUp, Theme } from "../../App";
const Header = () => {
    const { setShowPopUp } = useContext(PopUp);
    const { showAside } = useContext(PopUp);
    const { hideAside } = useContext(PopUp);
    const { darkMode } = useContext(Theme);
    const { setDarkMode } = useContext(Theme);
    const { aside } = useContext(PopUp);

    return (
        <header className={darkMode && `dark`}>
            <div className="headerWrapper">
                <button
                    className="walletButton"
                    onClick={() => setShowPopUp((prev) => !prev)}
                >
                    Connect wallet
                </button>
                <button className={`moreButton ${darkMode && "darkBg darkFont"}`}>
                    <BsThreeDotsVertical />
                </button>
            </div>
            <div className="mode">
                <div onClick={() => setDarkMode((prev) => !prev)}>
                    {darkMode ? (
                        <FiSun size={20} color="#f3ba2f" />
                    ) : (
                        <MdDarkMode size={20} color="#f3ba2f" />
                    )}
                </div>
            </div>
            <div id="hamberger">
                {aside ? (
                    <GiHamburgerMenu
                        onClick={showAside}
                        className={darkMode && "darkFont"}
                        size={20}
                    />
                ) : (
                    <RxCross1
                        onClick={hideAside}
                        className={darkMode && "darkFont"}
                        size={20}
                    />
                )}
            </div>
        </header>
    );
};
export default Header;
