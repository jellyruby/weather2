import AppLayout from "/components/layout/AppLayout";
import ContentLayout from "/components/layout/ContentLayout";
import styled from "styled-components";

import Content from "/components/Content";


  const TyphoonContentList =[
    {
      content:<Content href="/typhoon/detail">1</Content>,
      index:1
    },
    {
      content:<Content href="/typhoon/detail">2</Content>,
      index:2
    },
    {
      content:<Content href="/typhoon/detail">3</Content>,
      index:3
    },
    {
      content:<Content href="/typhoon/detail">4</Content>,
      index:4
    },
    {
      content:<Content href="/typhoon/detail">5</Content>,
      index:5
    },
    {
      content:<Content href="/typhoon/detail">6</Content>,
      index:6
    },
    {
      content:<Content href="/typhoon/detail">7</Content>,
      index:7
    },
    {
      content:<Content href="/typhoon/detail">8</Content>,
      index:8
    },
    {
      content:<Content href="/typhoon/detail">9</Content>,
      index:9
    },
  ];



const Typhoon = () => {
  return (
    <AppLayout>
      <ContentLayout col={3} row={3}>
        {TyphoonContentList.map((item, index) => {
          return <div key={item.index}>{item.content}</div>;
          })
        }
      </ContentLayout>
    </AppLayout>
  );
};

export default Typhoon;