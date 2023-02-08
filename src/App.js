import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';
import Popup from './components/Popup/Popup';
import './App.scss';
import { useRef, useState } from 'react';
import { createContext } from 'react';
const Theme = createContext()
const PopUp = createContext()
function App() {
  const asideBox = useRef()
  const rightBox = useRef()
  const [showPopUp, setShowPopUp] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [aside, setAside] = useState(true);
  const showAside = () => {
    setAside(false)
    asideBox.current.style.left = '0px'

    // rightBox.current.style.marginLeft = '20%'

  }
  const hideAside = () => {
    setAside(true)
    asideBox.current.style.left = '-100%'
    rightBox.current.style.marginLeft = '0%'
  }
  return (
    <Theme.Provider value={{ darkMode, setDarkMode }}>
      <PopUp.Provider value={{ setShowPopUp, showAside, hideAside, aside }}>
        <div className={`App ${darkMode && 'dark'}`}>
          {
            showPopUp && <Popup />
          }

          <div ref={asideBox} className={`left ${darkMode && 'darkBg darkFont'}`}>
            <Sidebar />

          </div>
          <div ref={rightBox} className="right">
            <Header />
            <Main />
          </div>
        </div>
      </PopUp.Provider>
    </Theme.Provider>
  );
}
export { Theme, PopUp }
export default App;
