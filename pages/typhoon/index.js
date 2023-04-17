import AppLayout from "/components/layout/AppLayout";
import ContentLayout from "/components/layout/ContentLayout";
import styled from "styled-components";
import Link from "next/link";


const TyphoonContent = styled.div`
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

  const TyphoonContentList =[
    <TyphoonContent>
      <Link href="/typhoon/detail"></Link>
    </TyphoonContent> ,
    <TyphoonContent>태풍 환경</TyphoonContent> ,
    <TyphoonContent>내용3</TyphoonContent> ,
    <TyphoonContent>내용4</TyphoonContent> ,
    <TyphoonContent>내용5</TyphoonContent> ,
    <TyphoonContent>내용6</TyphoonContent> ,
    <TyphoonContent>내용7</TyphoonContent> ,
    <TyphoonContent>내용8</TyphoonContent> ,
    <TyphoonContent>내용9</TyphoonContent> ,
  ];



const Typhoon = () => {
  return (
    <AppLayout>
      <ContentLayout col={3} row={3}>
        {TyphoonContentList.map((item, index) => {
          return <>{item}</>;
          })
        }
      </ContentLayout>
    </AppLayout>
  );
};

export default Typhoon;