import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

import Colors from './Palette';

import f1 from './assets/f1.svg'
import f2 from './assets/f2.svg'
import f3 from './assets/f3.svg'
import f4 from './assets/f4.svg'

const ThirdScreenWrapper = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
p{
    font-family: 'ClashDisplay-Variable';
    font-weight: 550;
    font-size: 3rem;
}

.special{
    color: ${Colors.blue};
    font-size: 4rem;
    padding-bottom: 15rem;
}

.top{
    text-align: center;
}

.card_div{
    width: 100vw;
    display: flex;
    height: 20rem;
    justify-content: center;
    align-items: center;
    .wrapper{
        position: absolute;
        transform-origin: 0 -100%;
        width: 60rem;
    }
}

.loading{
    position: relative;
    width: 100vw;
    height: 20rem;
    overflow: hidden;
    display: flex;
    justify-content: center;

}
`




const ThirdScreen = () => {

    const r1 = useRef()
    const r2 = useRef()
    const r3 = useRef()
    const r4 = useRef()


    // useEffect(()=>{
    //     const tl = gsap.timeline({
    //         repeat: -1
    //     })

    //     tl.fromTo(r1.current, {y : 0, x : 0, opacity: 1}, {y: -200, x: -200, opacity: 0, duration: 1}, "-=2")
    //     .fromTo(r2.current, {y : 0, x : 0, opacity: 1}, {y: -200, x: -200, opacity: 0, duration: 1}, "+=2")
    //     .fromTo(r3.current, {y : 0, x : 0, opacity: 1}, {y: -200, x: -200, opacity: 0, duration: 1}, "+=2")
    //     .fromTo(r4.current, {y : 0, x : 0, opacity: 1}, {y: -200, x: -200, opacity: 0, duration: 1}, "+=2")
    // }, [])


    const animate = () =>{
let animation = gsap.timeline({})
let targets = document.querySelectorAll(".wrapper")
let numberOfTargets = targets.length

let duration = 0.5 //change this
let pause = 2 // change this

let stagger = duration + pause
let repeatDelay = (stagger * (numberOfTargets - 1)) + pause

function init() {
  gsap.set(".wrapper", {autoAlpha:1})
  animation.from(targets, {x: 0, y: 0, transform: 'rotate(30deg)', duration:duration, opacity:0, stagger:{
    each:stagger,
    repeat:-1,
    repeatDelay:repeatDelay
  }})
     .to(targets, {x: -1000, y: -100, transform: 'rotate(-30deg)', duration:duration, opacity:0, stagger:{
    each:stagger,
    repeat:-1,
    repeatDelay:repeatDelay
  }}, stagger)
}



//click anywhere to pause
//window.addEventListener("click", () => animation.paused(!animation.paused()))
init()

animation.pause(duration)
gsap.delayedCall(1, ()=>animation.play())

    }


    // useEffect(()=>{
    //     const tl = gsap.timeline({repeat: -1, scrollTrigger: {
    //         trigger: ".card_div",
    //         toggleActions: "restart none none none"
    //       }})

    //     tl
    //     .to(r1.current, {x: -1000, y: -100, transform: 'rotate(-30deg)', opacity: 0, duration: 0.5}, "+=2")
    //     .to(r2.current, {x: -1000, y: -100, transform: 'rotate(-30deg)', opacity: 0, duration: 0.5}, "+=2")
    //     .to(r3.current, {x: -1000, y: -100, transform: 'rotate(-30deg)', opacity: 0, duration: 0.5}, "+=2")
    //     .to(r4.current, {x: -1000, y: -100, transform: 'rotate(-30deg)', opacity: 0, duration: 0.5}, "+=2")
    // }, [])

    useEffect(()=>{animate()}, [])

    return (
        <ThirdScreenWrapper>
            <div className='top'>
                <p className='another_dex'>Another DEX?</p>
                <p className='special'>What's so special?</p>
            </div>

{/*
            <div className='card_div'>
                <img ref={r1} src= {f1} />
                <img ref={r2} style = {{zIndex: -1, position: 'absolute'}} src= {f2} />
                <img ref={r3} style = {{zIndex: -2, position: 'absolute'}} src= {f3} />
                <img ref={r4} style = {{zIndex: -3, position: 'absolute'}} src= {f4} />

            </div>
 */}
        
            <div className='card_div'>

            <img ref={r1} className='wrapper' src= {f1} />
            <img ref={r2} style = {{zIndex: -1, position: 'absolute'}} className='wrapper' src= {f2} />
            <img ref={r3} style = {{zIndex: -2, position: 'absolute'}} className='wrapper' src= {f3} />
            <img ref={r4} style = {{zIndex: -3, position: 'absolute'}} className='wrapper' src= {f4} />

            </div>
            
        </ThirdScreenWrapper>
    );
}

export default ThirdScreen;