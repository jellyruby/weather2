import {useState,useRef,useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { setClicked } from '/reducers/content'
import styled from 'styled-components';
import Link from "next/link";

const StyledContent = styled.div`
  
  

  display: grid;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  z-index: -4;
  top: ${props => props.top??0};
  left : ${props => props.left??0};
  
  font-size: 1.3em;

  width: calc(100vw/3);
  height: calc(86vh/3);
  
  &:hover {
    background-color: ${props => props.theme.Color};
  }

  ${props => props.isClicked  && `
    position: absolute;
    //애니메이션 효과

    top:0;    
    left:0;
    
    transition-property: width, height,position,top,left,font-size,background-color,color ;
    transition-duration: 1s;
    transition-timing-function: ease-in-out;
    transition-delay: 0s, 0s, 0s;

    color: #ffffff;
    z-index: 10;
    width: 100vw;
    height: 86vh;

    font-size: 3.9em;

    background-color: ${props.theme.bgColor} !important;
    

  `}



`;

const Content = ({children,href}) => {
  
  const [click, setClick] = useState(false);  
  const [timer, setTimer] = useState(null); 
  const [position, setPosition] = useState({top:0,left:0});
  const dispatch = useDispatch();

  const LinkRef = useRef(null); 
  const ContentRef = useRef(null); 

  const onClick = () => {

      
    if(click === false) {

      setClick(!click);
      
      dispatch(setClicked({contentClicked:true}));
    }

  }

  useEffect (() => {
    
    setPosition(
      {
        top:ContentRef.current.getBoundingClientRect().top - (window.innerHeight * 0.14)+'px',
        left:ContentRef.current.getBoundingClientRect().left+'px'
      }
      );


    if (click === true) { 

      setTimer(setTimeout(() => {
         LinkRef.current.click();
      }, 1000));
    }

    return () => {
      clearTimeout(timer);
    }

  }, [click,LinkRef]);



  return (
    <>
      <StyledContent 
        onClick={onClick} isClicked ={click} 
        ref={ContentRef}
        top={position.top} left={position.left}
      >
          {children}
          <Link ref={LinkRef}  href={href??'/'} style={{display:'none'}}></Link>
                
      </StyledContent>
      {click && <StyledContent></StyledContent>}
    </>
  );


};

export default Content;