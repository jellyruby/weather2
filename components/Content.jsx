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
  left: 0;

  width: calc(100vw/3);
  height: calc(86vh/3);
  
  & div{
    position: relative;
  }
  
  &:hover {
    background-color: ${props => props.theme.Color};
  }

  ${props => props.isClicked  && `
    position: absolute;
    //애니메이션 효과
    
    transition-property: width, height,position;
    transition-duration: 0.5s, 0.5s, 0.5s;
    transition-timing-function: ease-in-out, ease-in-out;
    transition-delay: 0s, 0s, 0.5s;

    z-index: 5;
    width: 100vw;
    height: 86vh;
    background-color: ${props => props.theme.bgColor};
  `}



`;

const Content = ({children,href}) => {
  
  const [click, setClick] = useState(false);  
  const [timer, setTimer] = useState(null); 
  const dispatch = useDispatch();

  
  const LinkRef = useRef(null); 

  const onClick = () => {

    if(click === false) {
      setClick(!click);
      
      dispatch(setClicked({contentClicked:true}));
    }

  }

  useEffect (() => {
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
      <StyledContent onClick={onClick} isClicked ={click}>
          {children}
          <Link ref={LinkRef}  href={href??'/'} style={{display:'none'}}></Link>
                
      </StyledContent>
      {click && <StyledContent></StyledContent>}
    </>
  );


};

export default Content;