import React, { useState } from 'react';
import Nav from '../../Components/Nav';
import ContinueWithTria from '../../Components/ContinueWithTria';
import EmailAndSocial from '../../Components/EmailAndSocial';
import ConnectWallet from '../../Components/ConnectWallet';
import HomeBackgroundVector from '../../Components/HomeBackgroundVector';
import Footer from '../../Components/Footer';


export default function Home() {
  const [continueWithTria, setContinueWithTria] = useState(true);
  const [emailAndSocial, setEmailAndSocial] = useState(false);
  const [connectWallet, setConnectWallet] = useState(false);

  const toggleState=()=>{
    setContinueWithTria(!continueWithTria);
    setEmailAndSocial(false);
    setConnectWallet(false)
  }
  const toggleState2=()=>{
    setContinueWithTria(false);
    setEmailAndSocial(!emailAndSocial);
    setConnectWallet(false)
  }
  const toggleState3=()=>{
    setContinueWithTria(false);
    setEmailAndSocial(false);
    setConnectWallet(!connectWallet);
  }

  return (

    <div className="w-[448px] bg-white rounded-2xl h-[840px] p-4 flex-col justify-between inline-flex">
      <div style={{ marginLeft: '-150px' }} className="absolute top-0 ">
        {' '}
        <HomeBackgroundVector />
      </div>
      <div className="flex-col justify-start gap-2 flex">
        <Nav />
      </div>
      {!continueWithTria && <div className='cursor-pointer' onClick={toggleState}>
        <div className="w-[416px] h-[78px] px-5 py-4 rounded-2xl border border-stone-950 border-opacity-5 flex-col justify-center items-center gap-2 inline-flex">
          <div className="self-stretch h-[46px] py-3 flex-col justify-center items-start gap-4 flex">
            <div className="self-stretch justify-start items-center gap-2 inline-flex">
              <div className="text-center text-stone-950 text-opacity-80 text-lg font-medium font-Montserrat leading-snug">Continue with Tria</div>
              <div className="px-2 py-1 bg-indigo-500 bg-opacity-10 rounded-[22px] justify-center items-center gap-2 flex">
                <div className="text-center text-indigo-500 text-opacity-90 text-xs font-medium font-Montserrat leading-[14.40px]">private</div>
              </div>
            </div>
          </div>

        </div>
      </div>}
      {continueWithTria && (
        <div >
          <ContinueWithTria toggleState={toggleState} />
        </div>
      )}
      {!emailAndSocial && <div className='cursor-pointer' onClick={toggleState2} >
        <div className="w-[416px] h-[78px] px-5 py-4 rounded-2xl border border-stone-950 border-opacity-5 flex-col justify-center items-center gap-2 inline-flex">
          <div className="self-stretch h-[46px] py-3 flex-col justify-center items-center gap-4 flex">
            <div className="self-stretch justify-start items-center gap-2 inline-flex">
              <div className="text-center text-stone-950 text-opacity-80 text-lg font-medium font-Montserrat leading-snug">Email & Social</div>
              <div className="h-[22px] px-2 py-1 bg-pink-500 bg-opacity-10 rounded-[22px] justify-center items-center gap-2 flex">
                <div className="text-center text-pink-500 text-opacity-90 text-xs font-medium font-Montserrat leading-[14.40px]">fast</div>
              </div>
            </div>
          </div>
        </div>
      </div>}
      {emailAndSocial && (
        <div >
          <EmailAndSocial toggleState2={toggleState2} />
        </div>
      )}
      {!connectWallet && <div className='cursor-pointer' onClick={toggleState3}>
        <div className="w-[416px] h-[78px] px-5 py-4 rounded-2xl border border-stone-950 border-opacity-5 flex-col justify-center items-center gap-2 inline-flex">
          <div className="self-stretch h-[46px] py-3 flex-col justify-start items-center gap-4 flex">
            <div className="self-stretch h-[22px] flex-col justify-center items-start gap-2 flex">
              <div className="text-center text-stone-950 text-opacity-80 text-lg font-medium font-Montserrat leading-snug">Connect a Wallet</div>
            </div>
          </div>
        </div>
      </div>}
      {connectWallet && (
        <div>
          <ConnectWallet toggleState3={toggleState3} />
        </div>
      )}
      <div className="self-stretch h-[43px] py-3 rounded-[44px] flex-col justify-start items-start gap-3 flex">
        <div className="self-stretch justify-center gap-2 inline-flex">
          <div className="w-[19px] h-[19px] relative rounded-[5px]" />
          <img src="/icons/logo.svg" alt="logo" />
          <div className="text-center text-zinc-500 text-opacity-40 text-sm font-semibold font-Montserrat leading-[16.80px]">
            Powered by Tria
          </div>
        </div>
      </div>
    </div>
    
  );
}
