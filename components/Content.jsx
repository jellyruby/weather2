import {useState,useRef,useEffect} from 'react';
import styled from 'styled-components';
import Link from "next/link";

const StyledContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  
  &:hover {
    background-color: ${props => props.theme.Color};
  }

  &.click {
    
    z-index: -4;
    top: 14vh;
    width: 100%;
    height: 86vh;
  }

`;

const Content = ({children,href}) => {
  
  const [click, setClick] = useState(false);  
  const [timer, setTimer] = useState(null); 
  const LinkRef = useRef(null); 

  const onClick = () => {

    setClick(!click);

    // setTimeout(() => {
    //   LinkRef.current.click();
    // }, 1000);
    

  }

  useEffect (() => {
    if (click) { 
      setTimer(setTimeout(() => {
        LinkRef.current.click();
      }, 1000));
    }

    return () => {
      clearTimeout(timer);
    }

  },[click]);



  return (
    <StyledContent onClick={onClick} className={click}>
      <Link ref={LinkRef}  href={href??'/'}></Link>
      {children}      
    </StyledContent>
  );


};

export default Content;