import React from 'react';
import styled from 'styled-components';
import Colors from '../Palette';

const TextCardWrapper = styled.div`
    background-color: white;
    box-shadow: -1px 3px 4px rgba(0, 0, 0, 0.26);
    width: 25rem;
    height: 10rem;
    padding: 1rem;
    margin: 2rem;
    p{
        font-family: 'Inter';
    }

    .head{
        color: ${Colors.blue};
        margin-bottom: 0.6rem;
        font-size: 1.4rem;
        font-weight: bold;
    }

`

const TextCard = ({heading, text}) => {
    return (
        <TextCardWrapper>
            <p className='head'>{heading}</p>
            <p>{text}</p>
        </TextCardWrapper>
    );
}

export default TextCard;