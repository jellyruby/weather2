import AppLayout from "/components/layout/AppLayout";
import {useEffect,useState} from 'react';
import styled from 'styled-components';


const DetailContent = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  z-index: -5;
  position: absolute;
  width: 100%;
  height: 86vh;
  top: 14vh;

  //중앙 정렬
  align-items: center;
  justify-items: center;


  & > div {

    display: grid;

    align-items: center;
    justify-items: center;

    height: 10vh;
    width: 10vh;
  }

`;

const Detail = () => {
  
  return (
    <AppLayout>
      <DetailContent>
        <div>제목</div>
        <div>설명

        
          <a href="https://www.data.jma.go.jp/gmd/kaiyou/data/db/kaikyo/daily/sst_HQ.html?areano=0">
          일본 기상청 수온 데이터
          </a>
        </div>
        
        

      </DetailContent>
    </AppLayout>
  );

};

export default Detail;