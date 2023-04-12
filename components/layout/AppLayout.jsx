import styled from 'styled-components';
import useOnEvent from '/hooks/useOnEvent';
import { useState } from 'react';



const TopMenu = styled.div`

  width: 100%;
  height: 3vh;
  font-size: ${props => props.isMouseOver ? '3vh' : '2vh'};
  font-family: Noto Sans KR;
  font-weight: bold;
  background-color: ${props => props.theme.bgColor};
  

`;



const AppLayout = () => {

  const [isMouseOver, setIsMouseOver] = useOnEvent(false);
  const [fontSize, setFontSize] = useState('2vh')
  

  return <>
    <TopMenu isMouseOver={isMouseOver} onMouseOver={setIsMouseOver}>바보</TopMenu>
  </>;

}

export default AppLayout;
