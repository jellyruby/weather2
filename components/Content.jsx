import {useState,useRef,useEffect} from 'react';
import styled from 'styled-components';
import Link from "next/link";

const StyledContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  z-index: -4;

  & div{
    position: relative;
  }
  
  &:hover {
    background-color: ${props => props.theme.Color};
  }

  &.click div {
    position: absolute;
    //애니메이션 효과
    transition: all 0.5s ease-in-out; 
    z-index: -3;
    width: 100vw;
    height: 86vh;
    background-color: ${props => props.theme.bgColor};
  }
  &.click:hover div {
    background-color: ${props => props.theme.bgColor};
  }

`;

const Content = ({children,href}) => {
  
  const [click, setClick] = useState(false);  
  const [className, setclassName] = useState(null);  
  const [timer, setTimer] = useState(null); 
  const LinkRef = useRef(null); 

  const onClick = () => {

    if(click === false) {
      setClick(!click);
      setclassName('click');
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
    <StyledContent onClick={onClick} className={className}>
      <div>
        <Link ref={LinkRef}  href={href??'/'}></Link>
        {children}      
      </div>
    </StyledContent>
  );


};

export default Content;