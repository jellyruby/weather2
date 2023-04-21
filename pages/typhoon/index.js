import AppLayout from "/components/layout/AppLayout";
import ContentLayout from "/components/layout/ContentLayout";
import styled from "styled-components";
import Link from "next/link";
import Content from "/components/Content";


  const TyphoonContentList =[
    <Content>
      <Link href="/typhoon/detail"></Link>
    </Content> ,
    <Content>태풍 환경</Content> ,
    <Content>내용3</Content> ,
    <Content>내용4</Content> ,
    <Content>내용5</Content> ,
    <Content>내용6</Content> ,
    <Content>내용7</Content> ,
    <Content>내용8</Content> ,
    <Content>내용9</Content> ,
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