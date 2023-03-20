import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 16rem;
    height: 8rem;
    margin: 1rem;
    transition: all 0.5s;
    
    :hover{
        background-color: rgba(0, 0, 255, 0.1);
        cursor: pointer;
    }
    
    img{
        width: 5rem;
        height: 5rem;
    }
    p{
        font-family: 'Inter';
        font-size: 1rem;
        color: #323232;
        margin-top: 0.6rem;
    }

`

const Card = ({icon, text}) => {
    return (
        <CardWrapper>
            <img src = {icon} />
            <p>{text}</p>
        </CardWrapper>
    );
}

export default Card;