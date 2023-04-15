import AppLayout from "/components/layout/AppLayout";
import ContentLayout from "/components/layout/ContentLayout";
import styled from "styled-components";


const TyphoonContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  

  &:hover {
    
    background-color: ${props => props.theme.Color};
    
  }

`;

  



const Typhoon = () => {
  return (
    <AppLayout>
      <ContentLayout col={3} row={3}>
        <TyphoonContent>현재 태풍</TyphoonContent> 
        <TyphoonContent>태풍 환경</TyphoonContent> 
        <TyphoonContent>내용3</TyphoonContent> 
        <TyphoonContent>내용4</TyphoonContent> 
        <TyphoonContent>내용5</TyphoonContent> 
        <TyphoonContent>내용6</TyphoonContent> 
        <TyphoonContent>내용7</TyphoonContent> 
        <TyphoonContent>내용8</TyphoonContent> 
        <TyphoonContent>내용9</TyphoonContent> 
      </ContentLayout>
    </AppLayout>
  );
};

export default Typhoon;