import styled from 'styled-components';

export const StyledContent = styled.div`
  
  

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