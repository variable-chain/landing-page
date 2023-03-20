import React from 'react';
import styled from 'styled-components';
import Colors from './Palette';

import twitter from './assets/twitter_blue.svg'
import discord from './assets/discord_blue.svg'
import telegram from './assets/telegram_blue.svg'


const ContactWrapper = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'ClashDisplay-Variable';
    font-size: 3rem;
    font-weight: 600;
    color: ${Colors.blue};    

    .contact_card_container{
        margin-top: 10rem;
    }

    .contact_card{
        display: flex;
        width: 60rem;
        border: 1px solid #0037FD;
        justify-content: space-between;
        align-items: center;

        .left{
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 4rem;

            img{
                width: 4rem;
            }

        span{
            color: rgba(65, 71, 91, 1);
            font-family: 'ClashDisplay-Variable';
            font-weight: 500;
            font-size: 2.5rem;
            margin-left: 2rem;
        }
    }

        a{
            font-family: 'Inter';
            text-decoration: none;
            width: 16rem;
            text-align: center;
            background-color: ${Colors.blue};
            padding: 1.6rem 0;
            color: white;
            font-size: 2rem;

            font-weight: 700;
            margin: 1.2rem;
        }
    }

`

const ContactCard = ({icon, name, link, linkText}) => {

    return(
        <div className='contact_card'>
            <div className='left'>
                <img src={icon} />
                <span>{name}</span>
            </div>

            <a href={link}>{linkText}</a>
        </div>
    )
}

function Contact(props) {
    return (
        <ContactWrapper id='contact'>
            <p>Contact</p>
            <div className = 'contact_card_container'>
            <ContactCard icon={twitter} name = 'Twitter' linkText='Follow' link = 'https://twitter.com/Variabledex' />
            <ContactCard icon={discord} name = 'Discord' linkText='Join Now' link = 'https://discord.gg/34EMRamDct' />
            <ContactCard icon={telegram} name = 'Telegram' linkText='Join Now' link = 'https://t.me/variabledex' />
            </div>
        </ContactWrapper>
    );
}

export default Contact;