import React, {useState, useEffect, useRef} from 'react';

import styled from 'styled-components';

import gsap from 'gsap';

const SlideshowWrapper = styled.div`
  width: 100vw;
  overflow: hidden;
  background-color: #0037FD;
  display: flex;
  justify-content: center;
  align-items: center;

  .text-slide{
  width: 100%;
  display: flex;

  p{
  min-width: 100%;
  color: #fff;
  font-size: 1.5rem;
  text-align: center;
  padding: 4rem 0;
  color: white;
  font-family: 'Inter';
  font-weight: bold ;

}
}




.slideshowSlider {
  white-space: nowrap;
  transition: ease 500ms;
  
}

.slide {
  display: inline-block;
  text-align: center;
  height: 6rem;
  width: 100%;
  font-size: 1.5rem;
  color: white;
  font-family: 'Inter';
  padding-top: 3rem;
  font-weight: bold ;
}

/* Buttons */

.slideshowDots {
  text-align: center;
  
}

.slideshowDot {
  display: inline-block;
  height: 5px;
  width: 5px;
  border-radius: 50%;
  transition: all 0.5s;
  cursor: pointer;
  margin: 8px 5px 0px;
  background-color: white;
}

.slideshowDot.active {
  height: 8px;
  width: 8px;

}

.slder {
  height: 6rem;
}

`

const delay = 2500;


const Slideshow = () => {


  const animate = () =>{
    const textSlide = document.querySelector(".text-slide");
    const text = textSlide.querySelectorAll("p");
    
    // const prev = document.querySelector(".prev");
    // const next = document.querySelector(".next");
    
    let counter = 1;
    const size = text[0].clientWidth;
    
    //to set the slide one as the first slide instead of the clone
    textSlide.style.transform = `translateX(-${size * counter}px)`;
    
    //looping the slider every 2s
    setInterval(()=>{
      if(counter >= text.length -1) return;
      
      textSlide.style.transition = `transform 0.8s ease`;
      counter++;
      textSlide.style.transform = `translateX(-${size * counter}px)`; 
      
    }, 3500);
    
    textSlide.addEventListener('transitionend', () => {
      if(text[counter].id === 'lastClone'){
        textSlide.style.transition = `none`;
        counter = text.length - 2;
        textSlide.style.transform = `translateX(-${size * counter}px)`;
      }
      
      if(text[counter].id === 'firstClone'){
        textSlide.style.transition = `none`;
        counter = text.length - counter;
        textSlide.style.transform = `translateX(-${size * counter}px)`;
      }  
    });
    
    
    // next.addEventListener('click', ()=>{
    //   if(counter >= text.length -1) return;
    //   textSlide.style.transition = `transform 0.4s ease`;
    //   counter++;
    //   textSlide.style.transform = `translateX(-${size * counter}px)`;
    // });
    
    // prev.addEventListener('click', ()=>{
    //   if(counter <= 0) return;
    //   textSlide.style.transition = `transform 0.4s ease`;
    //   counter--;
    //   textSlide.style.transform = `translateX(-${size * counter}px)`;
    // });
        }

        useEffect(()=>{animate()}, [])
        
      return (
        <SlideshowWrapper>
          <div className='text-slide'>

            <p id = 'lastClone'></p>
            <p>Designed for the traders, by the traders to trade derivatives in a non-custodial, permissionless manner.</p>
            <p>Earn Rewards through Trading and Staking, Unlock Premium Features with Increased Participation.</p>
            <p>Offering exceptional liquidity, low price impact, and secured by advanced risk engine.</p>
            <p id = 'firstClone'>Designed for the traders, by the traders to trade derivatives in a non-custodial, permissionless manner.</p>
          </div>
        </SlideshowWrapper>
      )

}

const _Slideshow = ({data}) => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === data.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <SlideshowWrapper>
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {data.map((data, index) => (
          <div
            className="slide"
            key={index}
          >{data}</div>
        ))}
      </div>

      <div className="slideshowDots">
        {data.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </SlideshowWrapper>
  );
}

export default Slideshow