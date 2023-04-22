import {useState,useRef} from 'react';
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
  const LinkRef = useRef(null); 

  const onClick = () => {

    LinkRef.current.click();

  }

  return (
    <StyledContent onClick={onClick} click={click}>
      <Link ref={LinkRef}  href={href??'/'}></Link>
      {children}      
    </StyledContent>
  );


};

export default Content;