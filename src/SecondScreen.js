import React, {useEffect, useState, useRef} from 'react';
import styled from 'styled-components';

import Card from './Components/Card';
import TextCard from './Components/TextCard';
import Toggle from './Components/Toggle';


import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import orderbook from './assets/orderbook.svg'
import list from './assets/list.svg'
import no_gas_fees from './assets/no_gas_fees.svg'
import sleek from './assets/sleek.svg'
import non_custodial from './assets/non_custodial.svg'
import multichain from './assets/multichain.svg'
import instant_settlement from './assets/instant_settlement.svg'
import x100 from './assets/100x.svg'
import cross_margin from './assets/cross_margin.svg'

import screen_black from './assets/screen_black.svg'
import screen_white from './assets/screen_white.svg'

gsap.registerPlugin(ScrollTrigger)

const SecondScreenWrapper = styled.div`
    width: 100vw;
    display: flex ;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 200vh;
    overflow: hidden;
    #about{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .heading{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 2rem 0rem;
        p{
            font-family: 'ClashDisplay-Variable';
            color: #323232;
            font-size: 1.2rem;
        }
        .h1 {
            font-size: 3rem;
            font-weight: bold;
        }
    }

    .toggleScreen{
        height: fit-content;
        padding: 2rem 0rem;
    }
    .center{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 90vw;
        .left, .screen, .right{
            display: flex;
            flex-direction: column;
            justify-content: center
        }

        .screen{
            display: flex;
            justify-content: center;
            align-items: center;
            .frame{
                display: flex;
            justify-content: center;
            align-items: center;
            .white{
                position: absolute;
                opacity: 0;
            }}
        }
    }

    .bottom{
        display: flex;
        justify-content: center;
    }

    .s1, .s2{
        //margin-top: 10vh;
        height: 100vh;
        //background-image: url('/graph.svg');
    }

    .s2{

        .center{
            height: 80vh;
        }
        
        .heading{
            margin-top: 6rem;
        }
    }

    .backdrop{
        z-index: -5;
        height: 90%;
        width: 90%;
        position: absolute;
        background-image: url('/graph.svg');

    }


    .screen_img{
        width: 50rem;
        
    }

`

const SecondScreen = () => {
    const refWhite = useRef()
    const [day, setDay] = useState(false)
    
    useEffect(()=>{
        if(day){
                gsap.fromTo(refWhite.current, {opacity: 0}, {opacity: 1, ease: 'easeIn', duration: 0.5})
        }
        else{
            gsap.fromTo(refWhite.current, {opacity: 1}, {opacity: 0, ease: 'easeIn', duration: 0.5})

        }
    }, [day])


    

    const animate = () => {
    let s = gsap.utils.toArray('s1')


          gsap.to(".screen", {
            ease: "easeIn",
            scrollTrigger: {
              trigger: ".frame",
              start: "center center",
              end: "+=100%",
              pin: '.screen'
            }
          });
          gsap.to(".screen", {
            ease: "easeIn",
            scrollTrigger: {
              trigger: ".backdrop",
              start: "top top",
              end: "+=100%",
              pin: '.backdrop'
            }
          });
          


          gsap.from(s, {
            scrollTrigger: {
                snap: {
                    snapTo: 1,
                    duration: 0.3,
                    ease: 'power3.easeInOut'
                },
                trigger: ".s1",
                start: "top top",
                directional: false,
                //markers: true
                
            }
          })

      
    }

    useEffect(()=>{
        animate()
    }, [])

    

    return (
        <SecondScreenWrapper>
            <div className='s1' id = 'about'>
            <div className='backdrop'></div>


            <div className = "heading">
                <p className = 'h1'>What is Variable?</p>
                <p>A state-of-the-art Layer 3 Derivatives DEX that operates as a Validium AppChain built on top of the Layer 2 scaling solution StarkNet.</p>
            </div>

            <div className='center'>
                <div className = 'left'>
                    <Card icon={orderbook} text = 'Decentralised Orderbook' />
                    <Card icon={list} text = 'Permissionless Listing' />
                    <Card icon={no_gas_fees} text = 'No Gas fees' />
                </div>

                <div className = "screen">
                <Toggle setDay={setDay}/>
                    <div className = 'frame'>
                    <div className='black'>
                    <img className='screen_img' src={screen_black} />
                    </div>

                    <div className='white' ref = {refWhite}>
                    <img className='screen_img' src={screen_white} />
                    </div>
                    </div>

                </div>

                <div className = 'right'>
                    <Card icon = {sleek} text = 'Sleek UI' />
                    <Card icon={non_custodial} text = 'Non-Custodial' />
                    <Card icon={instant_settlement} text = 'Instant withdrawals' />
                </div>
            </div>

            <div className='bottom'>
                <Card icon={x100} text = 'Up-to 100x Leverage' />
                <Card icon={cross_margin} text = 'Cross-margin' />
                <Card icon = {multichain} text = 'Multi chain Support' />
            </div>
            </div>


            <div className='s1 s2'>
            <div className = "heading">
                <p className = 'h1'>Unlocking the Power of Derivatives</p>
            </div>

            <div className='center'>
                <div className = 'left'>
                  <TextCard heading='Power Perpetuals' text='Offers exposure to an asset indexed to a power. Increasing interest rates' />
                  <TextCard heading='Perpetuals' text='Offers leveraged trading, short selling, & hedging. No set maturity date' />
                </div>

                <div style={{opacity: 0, zIndex: -10}}>
                    <div>
                    <img className='screen_img' src={screen_black} />
                    </div>
                </div>

                <div className = 'right'>
                    <TextCard heading='Everlasting options' text='Options exposure without the need for position renewal or rollovers. Perfect for hedging/delta neutral strategies. Contracts with no expiry.' />
                </div>
            </div>

            </div>
        </SecondScreenWrapper>
    );
}

export default SecondScreen;