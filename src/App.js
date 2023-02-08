import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';
import Popup from './components/Popup/Popup';
import './App.scss';
import { useState } from 'react';
import { createContext } from 'react';
const Theme = createContext()
const PopUp = createContext()
function App() {
  const [showPopUp, setShowPopUp] = useState(true);
  const [darkMode, setDarkMode] = useState(true)
  return (
    <Theme.Provider value={{ darkMode, setDarkMode }}>
      <PopUp.Provider value={{ setShowPopUp }}>
        <div className="App">
          {
            showPopUp && <Popup />
          }

          <div className={`left ${darkMode && 'dark darkFont'}`}>
            <Sidebar />

          </div>
          <div className="right">
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
