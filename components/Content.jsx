import {useState,useRef,useEffect} from 'react';
import styled from 'styled-components';
import Link from "next/link";

const StyledContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  z-index: -4;

  
  transition-property: width,height,z-index;
  transition-duration: 1s, 1s;
  transition-timing-function: ease-out, ease-out;

  
  
  & div{
    position: relative;
  }
  
  &:hover {
    background-color: ${props => props.theme.Color};
  }

  ${props => props.isClicked  && `
    position: absolute;
    //애니메이션 효과
    

    z-index: -3;
    width: 100vw;
    height: 86vh;
    background-color: ${props => props.theme.bgColor};
  `}



`;

const Content = ({children,href}) => {
  
  const [click, setClick] = useState(false);  
  
  const [timer, setTimer] = useState(null); 
  const LinkRef = useRef(null); 

  const onClick = () => {

    if(click === false) {
      setClick(!click);
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
          <Link ref={LinkRef}  href={href??'/'}></Link>
          {children}      
      </StyledContent>
      {click && <StyledContent></StyledContent>}
    </>
  );


};

export default Content;