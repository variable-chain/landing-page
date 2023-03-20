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
            text-decoration: none;
            
            img{
                margin-right: 1rem;
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
        <NavWrapper>
            <img src = {logo} />
            
            <div className='navlinks'>
                <span onClick={scrollToAbout}>About Us</span>
                {/* <span>Blog</span> */}
                <span onClick = {scrollToCommunity}>Community</span>
                <a href = 'https://twitter.com/Variabledex' className = 'followbtn'><img src = {twitter} />Follow Us</a>
            </div>


        </NavWrapper>
    );
}

export default Navbar;