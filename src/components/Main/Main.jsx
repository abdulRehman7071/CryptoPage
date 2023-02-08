import "./Main.scss";
import React, { useState } from "react";
import { AiFillSafetyCertificate, AiOutlineInfoCircle } from "react-icons/ai";
import { FaUserClock } from "react-icons/fa";
import { useContext } from "react";
import { Theme } from "../../App";
const Main = () => {
    const [status, setStaus] = useState("Stake");
    const { darkMode } = useContext(Theme)
    return (
        <main className={darkMode && 'dark '}>
            <div className="wrapper">
                <div className={`cryptoDetails ${darkMode && 'darkFont'}`}>
                    <div className="cryptoLogo">
                        <img src="/assests/bnb-bnb-logo.svg" alt="bnb logo" />
                    </div>
                    <div className="cryptoDesc">
                        <div className="cryptoTitle">
                            <p>BNB</p>
                            <div className={`securityBox ${darkMode && "darkBg"}`}>
                                <AiFillSafetyCertificate color="#45BE21" size={25} />
                                <span>Safe & secured</span>
                            </div>
                        </div>
                        <div className="description">
                            <p>Stake BNB & use BNBx in DeFi while earning staking rewards</p>
                        </div>
                    </div>
                </div>
                <div className={` cryptoStats ${darkMode && 'darkBg'}`}>
                    <div className="tvlData dataBox">
                        <div className="dataName gray">
                            <span>TVL</span>
                            <span>
                                <AiOutlineInfoCircle />
                            </span>
                        </div>
                        <div className="dataSpecs">
                            <span className={darkMode && 'darkFont'}>30,686</span> BNB
                        </div>
                    </div>
                    <div className="apyData dataBox">
                        <div className="dataName gray">
                            APY
                            <span>
                                <AiOutlineInfoCircle />
                            </span>
                        </div>
                        <div className="dataSpecs">
                            <span className={darkMode && 'darkFont'}>3.45 %</span>
                        </div>
                    </div>
                    <div className="exchangeData dataBox">
                        <div className="dataName gray">
                            BNB/BNBx Exchange Rate
                            <span>
                                <AiOutlineInfoCircle />
                            </span>
                        </div>
                        <div className="dataSpecs">
                            <span className={darkMode && 'darkFont'}>1.0526</span> BNB
                        </div>
                    </div>
                </div>
                <div className={`stakeEarnWrapper`}>
                    <div className={`stake ${darkMode && 'darkBg darkFont  '}`}>
                        <div className={`stakeMenu ${darkMode && "darkFont"}`}>
                            <div
                                onClick={() => setStaus("Stake")}
                                className={status === "Stake" ? "bold" : ""}
                            >
                                Stake
                            </div>
                            <div
                                onClick={() => setStaus("Unstake")}
                                className=
                                {status === "Unstake" ? "bold" : ""}
                            >
                                Unstake
                            </div>
                            <div
                                onClick={() => setStaus("Withdraw")}
                                className={status === "Withdraw" ? "bold" : ""}
                            >
                                Withdraw
                            </div>
                        </div>
                        {status === "Stake" && (
                            <div className="addCrypto">
                                <div className="currentCrypto">
                                    <p>
                                        My BNB : <span>0</span>
                                    </p>
                                    <p>
                                        My BNBx : <span>0</span>
                                    </p>
                                </div>
                                <InsertCrypto
                                    url1="/assests/bnb-bnb-logo.svg"
                                    url2="/assests/bnbx-black.svg"
                                    multiply="0.9499 "
                                />

                                <div className="collectWallet">
                                    <Warnings
                                        color={darkMode ? '#ffffff' : '#60A0DA'}
                                        background={darkMode ? '#3d7cce' : '#EBF8FF'}
                                        text="Connect your wallet now to start staking"
                                        Icon={AiOutlineInfoCircle}
                                    />
                                    <button>Collect Wallet ></button>
                                </div>
                            </div>
                        )}
                        {status === "Unstake" && (
                            <div className="unstake">
                                <div className="availableBalance">
                                    <p>
                                        Available Balance :<span> 0 </span>BNBx
                                    </p>
                                </div>
                                <InsertCrypto
                                    url1="/assests/bnbx-black.svg"
                                    url2="/assests/bnb-bnb-logo.svg"
                                    multiply="1.0526"
                                />
                                <div className="collectWallet">
                                    <Warnings
                                        color={darkMode ? '#ffffff' : '#ECC94B'}
                                        background={darkMode ? '#e8be55' : '#FFFFF0'}
                                        text="Please Approve Unstaking using the button below to activate unstaking"
                                        Icon={FaUserClock}
                                    />
                                    <button>Collect Wallet ></button>
                                </div>
                            </div>
                        )}
                        {status === "Withdraw" && (
                            <div className="withdraw ">
                                <Warnings
                                    color={darkMode ? '#ffffff' : '#ECC94B'}
                                    background={darkMode ? '#e8be55' : '#FFFFF0'}
                                    size="40"
                                    text="You will be able to withdraw your tokens after the withdraw request has been processed. To unstake your amount go to Unstake Tab."
                                    Icon={FaUserClock}
                                />
                                <div className={`withdrawBox ${darkMode && 'dark'}`}>
                                    <div className="heading">
                                        <p>
                                            AMOUNT <AiOutlineInfoCircle />
                                        </p>
                                        <p>RELEASE TIME</p>
                                    </div>
                                    <WithdrawButton Amount="0.0021 BNB" />
                                    <WithdrawButton Amount="0.0052 BNB" />
                                </div>
                            </div>
                        )}
                    </div>
                    <div className={`earningStats ${darkMode && 'darkBg darkFont'}`}>
                        <div className="currentPrice">
                            <p>

                                Stader TVL

                                <span className={darkMode && 'darkFont'}>$ 172,418,039</span>
                            </p>
                        </div>
                        <div className="cardExploreBox">
                            <div className="knowMoreDiv">
                                <p>Earn ~49% with our Max Yield Strategy</p>
                                <button>Know More</button>
                            </div>
                            <div className="cryptoCardsWrapper">
                                <CryptoCards
                                    url="/assests/beefy.png"
                                    name="Beefy"
                                    ARY="14.14"
                                    darkMode={darkMode}
                                />
                                <CryptoCards
                                    url="/assests/monkey.png"
                                    name="Apeswap"
                                    ARY="14"
                                    darkMode={darkMode}
                                />
                                <CryptoCards
                                    url="/assests/ellepsis.png"
                                    name="Ellepsis"
                                    ARY="13"
                                    darkMode={darkMode}
                                />
                                <CryptoCards
                                    url="/assests/leverage.png"
                                    name="Open Leverage"
                                    ARY="2.6"
                                    darkMode={darkMode}
                                />
                                <CryptoCards
                                    url="/assests/leverage.png"
                                    name="Open Leverage"
                                    ARY=""
                                    darkMode={darkMode}
                                />
                                <CryptoCards
                                    url="/assests/impossible.svg"
                                    name="Impossible"
                                    ARY=""
                                    darkMode={darkMode}
                                />
                                <CryptoCards url="/assests/cone.svg" name="Cone" ARY="" darkMode={darkMode} />
                                <CryptoCards
                                    url="/assests/midas-light.svg"
                                    name="Midas"
                                    ARY=""
                                    darkMode={darkMode}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

const Warnings = ({ background, color, text, Icon, size }) => {
    return (
        <div
            className="warnings"
            style={{
                backgroundColor: background,
                padding: "0.7rem",
                borderRadius: "0.5rem",
            }}
        >
            <p style={{ display: "flex", alignContent: "center" }}>
                <Icon
                    style={{ marginRight: "10px", margin: "auto 10px" }}
                    color={color}
                    size={size}
                />
                <p>{text}</p>
            </p>
        </div>
    );
};
const InsertCrypto = ({ url1, url2, multiply }) => {
    const [shoewTotal, setShowTotal] = useState("");
    return (
        <>
            <div className="insertCrypto">
                <div>
                    <img src={url1} alt="bnb logo" />
                </div>
                <input
                    value={shoewTotal}
                    onChange={(e) => setShowTotal(e.target.value)}
                    type="number"
                    placeholder="Enter BNB Amount"
                />
                <span>
                    <div>Max</div>
                </span>
            </div>
            <div className="totalCrypto">
                <p>
                    You will get:
                    <span>
                        <img src={url2} alt="logo" />
                    </span>
                    <span>{shoewTotal * multiply}</span> BNBx
                </p>
            </div>
        </>
    );
};

const WithdrawButton = ({ Amount }) => {
    return (
        <div className="withdrawCard">
            <div className="withdrawAmount">{Amount}</div>
            <div className="cardButton">
                <p>Amount to be claimed</p>
                <button>Withdraw</button>
            </div>
        </div>
    );
};
const CryptoCards = ({ url, name, ARY, darkMode }) => {
    return (
        <div className={`cards ${darkMode && 'hideBorder cardBg'}`}>
            <div>
                <img src={url} alt="" />
                <h3>{name}</h3>
                <h2>
                    APR <span>{ARY} %</span>
                </h2>
                <span>
                    <img src="/assests/bnb-bnb-logo.svg" alt="" className="logo2" />
                    <img src="/assests/bnbx-black.svg" alt="" className="logo1" />
                    <span>BNBx / BNB</span>
                </span>
            </div>
        </div>
    );
};

export default Main;
