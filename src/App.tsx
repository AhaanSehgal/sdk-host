import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Home from './Pages/Home';
import { useEffect, useState } from "react";
import ConfirmEmail from './Pages/ConfirmEmail';
import SignUp from './Pages/SignUp/EmailPage';
import PasswordPage from './Pages/SignUp/SignUpPassword';
import SignInPassword from './Pages/SignIn/SignInPassword';
import SignUpPassword from './Pages/SignUp/SignUpPassword';
import Welcome from './Pages/WelcomePage/Welcome';
import Onboarding from './Pages/Onboarding';
import ConnectWallet from './Pages/ConnectWallet';
import ConnectingAnimation from './Pages/ConnectWallet/ConnectingAnimation';
import CreateWallet from './Pages/CreateWallet';
import SignUpPasswordConfirm from './Pages/SignUp/SignUpPasswordConfirm';
import LoaderPage from './Pages/Loader';
import NavContext from './NavContext';


const App = () => {

  const [showWallet, setShowWallet] = useState(true);
  const [view, setView] = useState("Home")
  const [triaName, setTriaName] = useState("")

  const nav_context_object = {
    view,
    setView,
    triaName,
    setTriaName
  }

  return (
    <>
    
      <NavContext.Provider value={nav_context_object}>
        <Router>
          <div className="flex items-center justify-center">
            <div className="">
              {view === "Home" ? <Home /> : null}
              {view === "Sign Up" ? <SignUp /> : null}
              {view === "Confirm Email" ? <ConfirmEmail /> : null}
              {view === "Sign In Password" ? <SignInPassword /> : null}
              {view === "Welcome" ? <Welcome /> : null}
              {view === "Onboarding" ? <Onboarding /> : null}
              {view === "Create A Wallet" ? <CreateWallet /> : null}
              {/* {showWallet && (
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/confirmEmail" element={<ConfirmEmail />} />
                  <Route path="/signUp" element={<SignUp />} />
                  <Route path="/signUpPassword" element={<SignUpPassword />} />
                  <Route path="/signUpPasswordConfirm" element={<SignUpPasswordConfirm />} />
                  <Route path="/signInPassword/:param" element={<SignInPassword />} />
                  <Route path="/welcome" element={<Welcome />} />
                  <Route path="/onboarding" element={<Onboarding />} />
                  <Route path="/connectWallet" element={<ConnectWallet />} />
                  <Route path="/createWallet" element={<CreateWallet />} />
                  <Route path="/connectingAnimation" element={<ConnectingAnimation />} />
                  <Route path="/callback/google" element={<LoaderPage />} />
                </Routes>
              )} */}
              {/* <div
              className="wallet_icon fixed w-[80px] bottom-4 right-8 cursor-pointer"
              onClick={() => {
                setShowWallet(!showWallet);

              }}
            >

              <div className="relative ">
                <div className="left-[15.49px] top-[15.49px]">
                  {" "}
                  <img className="wallet_icon " src="/icons/wallet.png" alt="wallet" />
                </div>
              </div>
            </div> */}
            </div>
          </div>
        </Router>
      </NavContext.Provider>
    </>
  );
};

export default App;