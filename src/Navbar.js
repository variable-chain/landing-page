import React from 'react';
import logo from './assets/logo_blue.svg';
import twitter from './assets/twitter_white.png'
import styled from "styled-components";

import Colors from './Palette';


//import {Link} from 'react-router-dom'

const NavWrapper = styled.nav`
  width: 100vw ;
  padding: 2rem 4rem;
  display: flex;
  justify-content: space-between ;
  font-family: 'Inter', sans-serif;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
  font-weight: bold;



  .tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  top: 150%;
  left: 50%;
  margin-left: -60px;
}

.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent black transparent;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}



  .logo{
    width: 10rem;
  }




  div{
        span{
            margin: 0 2rem;
            //font-weight: 500 ;
            :hover{
                cursor: pointer;
            }
        }

        display: flex;
        justify-content: center ;
        align-items: center ;

        .followbtn{
            background-color: ${Colors.blue};
            color: white ;
            padding: 1rem 2.5rem;
            display: flex ;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            margin-left: 2rem;
            
            img{
                margin-right: 1rem;
                width: 1.5rem;
            }
        }
  }



  @media screen and (max-device-width: 640px) {
    justify-content: center;
    margin-top: 2rem;
      div{
        span{
          margin: 0 1rem;
        }
      }

      .navlinks{
        display: none;
      }

      .followbtn{
        img{
          margin-right: 0.5rem;
        }
      }
    }
`



const Navbar = () => {

    const scrollToAbout = () => {
        document.getElementById('about').scrollIntoView({
            behavior: 'smooth'
       });
        //gsap.to($(window), {duration: 2, scrollTo:"#about"});
    }

    const scrollToCommunity = () => {
        document.getElementById('contact').scrollIntoView({
            behavior: 'smooth'
       });
        //gsap.to($(window), {duration: 2, scrollTo:"#about"});
    }
    return (
        <NavWrapper className='nav_wrapper'>
            <img className = 'logo' src = {logo} />
            
            <div className='navlinks'>
                <span className = 'tooltip' onClick={scrollToAbout}>About Us<span class="tooltiptext">Coming Soon!</span></span>
                {/* <span>Blog</span> */}
                <span className = 'tooltip' onClick = {scrollToCommunity}>Community<span class="tooltiptext">Coming Soon!</span></span>
                <a href = 'https://twitter.com/Variabledex' className = 'followbtn'><img src = {twitter} />Follow Us</a>
            </div>


        </NavWrapper>
    );
}

export default Navbar;