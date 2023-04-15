import styled from 'styled-components';




const ContentLayoutStyled = styled.div`

  //그리드
  display: grid;  
  position: absolute;

  
  grid-template-columns: repeat(${props => props.col}, 1fr);
  grid-template-rows: repeat(${props => props.row}, 1fr);
  grid-template-areas: "main";
  grid-template-margin: 0.5vh 0.5vh 0.5vh 0.5vh;

  z-index: -5;
  top: 14vh;
  width: 100%;
  height: 86vh;
`;


//그리드 개수에 따라서 그리드 템플릿 변경
const ContentLayout = ({ col, row , children}) => {

  return <ContentLayoutStyled col={col} row={row}>
    {children}
  </ContentLayoutStyled>
  ;
}

export default ContentLayout;