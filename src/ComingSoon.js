import React from 'react';
import styled from 'styled-components';

import Colors from './Palette';
import Navbar from './Navbar';

import starkware from './assets/starkware.png'
import heroImg from './assets/hero_image_black.png'

import twitter_blue from './assets/twitter_lightblue.svg'
import discord from './assets/discord_blue.svg'
import telegram from './assets/telegram.svg'

import playStore from './assets/play_store.svg'
import appStore from './assets/apple_store.svg'


const ComingSoonWrapper = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    flex-direction: column;

    .nav_wrapper{
        box-shadow: none;
    }


    .content{
        display: flex;
        justify-content: space-around;
        height: 100%;
        padding-top: 12rem;
        
    }

    .hero{
        img{
        width: 60rem;
        }
    }


    .first_heading{
    font-family: 'ClashDisplay-Variable';
    width: 35rem ;

    p{
      color: ${Colors.blue} ;
      display: flex;
      align-items: center ;
      font-weight: 550 ;
      font-size: 1rem ;
      word-spacing: 0.2rem ;
      letter-spacing: 0.08em;

      
      img{
        margin-left: 0.5rem;
        width: 0.8rem;

      }
  }

    .heading{
      margin-top: 0.4rem ;
      font-size: 3rem;
      font-weight: 600 ;
      margin-bottom: 2rem;
    }

    .heading_bottom{
    font-family: 'Inter', sans-serif;
    display: flex;
    align-items:  center;
    margin-top: 4rem ;
    margin-bottom: 2rem;
    

    span{
      margin-right: 2rem;
      color: white;
      background-color: ${Colors.blue};
      font-size: 1.6rem;
      padding: 0.4rem 1rem;
      
    }
    img{
      margin: 0 0.6rem;
      width: 1.8rem;
    }
  }

  .stores{
    display: flex;
    justify-content: center;
    img{
        margin-right: 2rem;
    }
  }

  }


`

const ComingSoon = () => {
    return (
        <ComingSoonWrapper>
            <Navbar />
            <div className='content'>

                <div className="first_heading">
                <p>Powered By Starkware <img src={starkware} /></p>
                <p className="heading">Trade Perpetuals, Collect SBTs, and Earn Revenue</p>

                <div className="heading_bottom"><span>Coming Soon</span>
                <a href = 'https://discord.gg/34EMRamDct'><img src={discord} /></a>
                <a href = 'https://twitter.com/Variabledex'><img src={twitter_blue} /></a>
                <a href = 'https://t.me/variabledex'><img src={telegram} /></a>
                </div>

                <div className='stores'>
                    <img src = {playStore} />
                    <img src = {appStore} />
                </div>
                </div>

                <div className='hero'>
                    <img src={heroImg} />
                </div>
            </div>
        </ComingSoonWrapper>
    );
}

export default ComingSoon;