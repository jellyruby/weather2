import {useState} from 'react';
import styled from 'styled-components';


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

const Content = ({children}) => {
  
  const [click, setClick] = useState(false);  

  const onClick = () => {

    click ? setClick(false) : setClick(true);    
  }

  return (
    <StyledContent onClick={onClick} click={click}>
      {children}      
    </StyledContent>
  );


};

export default Content;