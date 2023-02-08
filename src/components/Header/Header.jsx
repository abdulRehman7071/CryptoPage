import './Header.scss'
import React, { useState, useContext } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { FiSun } from 'react-icons/fi'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdDarkMode } from 'react-icons/md';
import { RxCross1 } from 'react-icons/rx';
import { PopUp, Theme } from '../../App';
const Header = () => {
    const { setShowPopUp } = useContext(PopUp);
    const { darkMode } = useContext(Theme)
    const { setDarkMode } = useContext(Theme)
    const [showAside, setShowAside] = useState(false)
    const handleAside = () => {
        setDarkMode(prev => !prev)
    }
    return (
        <header className={darkMode && `dark`}>
            <div id='hamberger'>
                {
                    showAside ?
                        <GiHamburgerMenu onClick={() => setShowAside(prev => !prev)} className={darkMode && 'darkFont'} size={20} /> :
                        <RxCross1 onClick={() => setShowAside(prev => !prev)} className={darkMode && 'darkFont'} size={20} />
                }



            </div>
            <div className="headerWrapper">
                <button className='walletButton' onClick={() => setShowPopUp(prev => !prev)}>
                    Connect wallet
                </button>
                <button className={`moreButton ${darkMode && 'darkBg darkFont'}`}>
                    <BsThreeDotsVertical />
                </button>

            </div>
            <div className="mode">
                <div onClick={handleAside}>
                    {
                        darkMode ? <FiSun size={20} color='#f3ba2f' /> : <MdDarkMode size={20} color='#f3ba2f' />
                    }


                </div>
            </div>


        </header>

    )
}
export default Header