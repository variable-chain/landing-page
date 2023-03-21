import React, {useEffect, useRef} from "react";
import Navbar from "./Navbar";
import styled from "styled-components";

import Colors from "./Palette";

import starkware from './assets/starkware.png'
import nothing_phone from './assets/nothing_phone.svg'
import background from './assets/background.svg'
import twitter_blue from './assets/twitter_blue.png'
import discord from './assets/discord.png'
import telegram from './assets/telegram.png'
import Slideshow from "./Components/Sliding";

import SecondScreen from "./SecondScreen";
import ThirdScreen from "./ThirdScreen";


import gsap from "gsap";
import Contact from "./Contact";


const HomeWrapper = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden ;

  .first_screen{
    height: 90vh;
    width: 100vw;
    display: flex ;
    flex-direction: column ;
    justify-content: center ;
    align-items: center ;


    p{
      color: ${Colors.blue} ;
      display: flex;
      justify-content: center;
      align-items: center ;
      font-weight: 550 ;
      font-size: 0.7rem ;
      word-spacing: 0.5rem ;

      
      img{
        margin-left: 0.5rem;
        width: 0.8rem;

      }
  }
  }
  .first_heading{
    font-family: 'ClashDisplay-Variable';
    text-align:center ;
    width: 20rem ;
    margin-top: 5rem ;
    
    .heading{
      margin-top: 0.4rem ;
      font-size: 1.6rem;
      text-align: center;
      font-weight: 600 ;
      margin-bottom: 2rem;
    }

    .image{

      display: flex;
      justify-content: center ;
      align-items: center ;
      

      .nothing_phone{
        position: relative ;
        width: 20rem;

      }

      .background{
        position: absolute ;
        z-index: -1 ;
        width: 18rem;

      }
    }


  }

  .heading_bottom{
    font-family: 'Inter', sans-serif;
    display: flex;
    justify-content: center;
    align-items:  center;
    margin-top: 1rem ;
    margin-bottom: 2rem;
    

    span{
      margin-right: 2rem;
      color: #595959;
      font-size: 0.9rem ;
    }
    img{
      margin: 0 0.6rem;
      width: 1.4rem;
    }
  }



`


function App() {

  const starkwareRef = useRef()
  const headingBottomRef = useRef()

  const timeline = gsap.timeline({
    repeat: false,
    defaults: {ease: "easeIn"}
  })

  useEffect(()=>{
      timeline
      .fromTo(headingBottomRef.current, {opacity: 0}, {opacity: 0})
      .fromTo(".nothing_phone",{y: '200%', scale: 2.5}, {y:'80%', scale: 2.5, duration: 1})
      .fromTo(starkwareRef.current, {y:'300%', scale: 1.5, opacity: 0}, {y:'300%', scale: 1.5, opacity: 1, duration: 1}, "-=0.5")
      .fromTo(starkwareRef.current, {y:'300%', scale: 1.5}, {y:0, scale: 1, duration: 1}, "+=0.2")
      .to(".nothing_phone", {y:0, scale: 1, duration: 0.8} , "-=1")
      .from(".background", {y : 1000}, "-=0.7")
      .fromTo(headingBottomRef.current, {opacity: 0}, {opacity: 1})
      
  }, [])                    




  return (
    <HomeWrapper>
      <Navbar />

      <div className="first_screen">
      <div className="first_heading">
        <div className=".starkware" ref={starkwareRef}>
        <p>Powered By Starkware <img src={starkware} /></p>
        <p className="heading">Trade Perpetuals, Collect SBTs, and Earn Revenue</p>
        </div>
        <div className="image">
        <img className="nothing_phone" src={nothing_phone} />
        <img className="background" src={background} />
        </div>
      </div>

      <div className="heading_bottom" ref={headingBottomRef}><span>Join the variable community to stay updated.</span>
      <a href = 'https://discord.gg/34EMRamDct'><img src={discord} /></a>
      <a href = 'https://twitter.com/Variabledex'><img src={twitter_blue} /></a>
      <a href = 'https://t.me/variabledex'><img src={telegram} /></a>
      </div>
      </div>

      <Slideshow />

      <SecondScreen />
      <ThirdScreen />
      <Contact />
      </HomeWrapper>
  );
}

export default App;
