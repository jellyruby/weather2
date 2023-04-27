import AppLayout from "/components/layout/AppLayout";
import ContentLayout from "/components/layout/ContentLayout";
import styled from "styled-components";

import Content from "/components/Content";


  const TyphoonContentList =[
    {
      content:<Content href="/typhoon/detail">뀨뀨꺄꺄</Content>,
      index:1
    },
    {
      content:<Content href="/typhoon/detail">뀨뀨꺄꺄</Content>,
      index:2
    },
    {
      content:<Content href="/typhoon/detail">뀨뀨꺄꺄</Content>,
      index:3
    },
    {
      content:<Content href="/typhoon/detail">뀨뀨꺄꺄</Content>,
      index:4
    },
    {
      content:<Content href="/typhoon/detail">뀨뀨꺄꺄</Content>,
      index:5
    },
    {
      content:<Content href="/typhoon/detail">뀨뀨꺄꺄</Content>,
      index:6
    },
    {
      content:<Content href="/typhoon/detail">뀨뀨꺄꺄</Content>,
      index:7
    },
    {
      content:<Content href="/typhoon/detail">뀨뀨꺄꺄</Content>,
      index:8
    },
    {
      content:<Content href="/typhoon/detail">뀨뀨꺄꺄</Content>,
      index:9
    },
  ];



const Typhoon = () => {
  return (
    <AppLayout>
      <ContentLayout col={3} row={3}>
        {TyphoonContentList.map((item, _) => {
          return <>{item.content}</>;
          })
        }
      </ContentLayout>
    </AppLayout>
  );
};

export default Typhoon;