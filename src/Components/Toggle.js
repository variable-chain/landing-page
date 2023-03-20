import React, {useRef, useState} from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

import sun from '../assets/sun.svg'
import moon from '../assets/moon.svg'
import toggle from '../assets/toggle.svg'


const ToggleWrapper = styled.div`

display: flex;
margin-top: 1rem;
margin-bottom: 1.5rem;

div{
height: 2rem;
width: 6rem;
padding: 0.5rem;
background-color: #8D8D8D;
border-radius: 1rem;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
:hover{
        cursor: pointer;
    }
img{
    width: 1.2rem;
}

.moon{
    width: 1rem;
}
}

.toggle{
    width: 2rem;
    height: 2rem;
    border-radius: 1rem;
    

    img{
        width: 2rem;
    }
}

.mirage{
    padding: 0.1rem;
    display: flex;    
    position: absolute;
    background-color: transparent;
    z-index: 5;    
    
    img{
        width: 2.2rem;
        position: absolute;
        
    }
}

`

const Toggle = ({setDay}) => {
    const r = useRef()
    const imageRef = useRef()
    const [position, setPosition] = useState('start')

    const animate = () => {
        if(position === 'start'){
        setPosition('end')
        setDay(true)
        //tl.play()
        gsap.fromTo(imageRef.current, {right:'4rem', rotate: 0}, {right: 0, rotate: 180, duration: 1, ease: 'easeIn'})


        }

        else{
        setPosition('start')
        setDay(false)
        gsap.fromTo(imageRef.current, {right:'0rem', rotate: 180}, {right: '3.8rem', rotate: 0, duration: 1, ease: 'easeIn'})

        
        //gsap.fromTo(imageRef.current,{left: '0rem'}, {rotate: -90,left: '0rem', ease: 'easeIn', duration: 1})
        //tl.reverse(1)
        }
        //r.current.setAttribute("class", `mirage ${position}`)
    }
    return (
        <ToggleWrapper>
            <div className='original'>
                
                <img className='moon' src={moon} />
                <img className='sun' src={sun} />

            </div>
            

            <div className='mirage' ref={r} onClick = {animate}>
            
                <img ref={imageRef} src={toggle} />
        
            </div>

            
        </ToggleWrapper>
    );
}

export default Toggle;