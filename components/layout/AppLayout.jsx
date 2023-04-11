import styled from 'styled-components';



const TopMenu = styled.div`

  width: 100%;
  height: 3vh;
  font-size: 2vh;
  background-color: ${props => props.theme.bgColor};

`;



const AppLayout = () => {

  return <>
    <TopMenu>바보</TopMenu>
  </>;

}

export default AppLayout;
