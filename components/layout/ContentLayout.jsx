import styled from 'styled-components';
import {useSelector} from 'react-redux';



const ContentLayoutStyled = styled.div`

  //그리드
  display: grid;  
  position: absolute;

  
  grid-template-columns: repeat(${props => props.col}, 1fr);
  grid-template-rows: repeat(${props => props.row}, 1fr);

  z-index: -5;
  top: 14vh;
  width: 100%;
  height: 86vh;


  ${props => props.isClicked  && `
    position: absolute;
    //애니메이션 효과
    
    transition-property: background-color,;
    transition-duration: 0.5s, 0.5s, 0.5s;
    transition-timing-function: ease-in-out, ease-in-out;
    transition-delay: 0s, 0s, 0.5s;

    z-index: 10;
    width: 100vw;
    height: 86vh;
    background-color: ${props => props.theme.bgColor};
  `}

`;


//그리드 개수에 따라서 그리드 템플릿 변경
const ContentLayout = ({ col, row , children}) => {

  const isClicked = useSelector(state => state.content.contentClicked);

  return <ContentLayoutStyled col={col} row={row} isClicked={isClicked}>
    {children}
  </ContentLayoutStyled>
  ;
}

export default ContentLayout;