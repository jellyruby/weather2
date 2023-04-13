import styled from 'styled-components';
import useOnEvent from '/hooks/useOnEvent';
import TopMenuBtn from './TopMenuBtn';
import { useState } from 'react';



const TopMenu = styled.div`

  //그리드
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-template-areas: "main main main";

  width: 100%;
  
  text-align: center;

  & > div:hover {
    height: 3.36vh;
    font-size: 2vh;
    cursor : pointer;
    color: ${props => props.theme.textColor};
    background-color: ${props => props.theme.Color};
  }

  & > div:hover:nth-child(even) {
    background-color: ${props => props.theme.ColorB};
  }

  & > div  {
    
    //그리드 텍스트 중앙정렬
    display: grid;
    justify-content: center;
    align-items: center;

    //박스 크기 변경
    height: 2.52vh;
    font-size: 1.5vh;

    //애니메이션 효과
    transition: all 0.2s ease-in-out; 

    //테마 색상
    color: ${props => props.theme.bgtextColor};
    background-color: ${props => props.theme.bgColor};

    //그림자 효과
    box-shadow: 0 0.2vw 0 0.05vw ${props => props.theme.shadowColor};

  }
  & > div:nth-child(even) {
    background-color: ${props => props.theme.bgColorB};

  }

`;



const AppLayout = () => {

  const [menu, setMenu] = useState(
    [{ 
      key: 0,
      value: '태풍',
      url: '/typhoon'
    },
    { 
      key: 1,
      value: '날씨',
      url: '/weather'
    },
    { 
      key: 2,
      value: '기후',
      url: '/climate'
    },
    ]
   );


  return <>
    <TopMenu>
      {
        menu.map((item) => {
          return <TopMenuBtn key={item.key} url={item.url} value={item.value}/>
        })
      }
      
      
    </TopMenu>
  </>;

}

export default AppLayout;
