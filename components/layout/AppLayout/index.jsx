import styled from 'styled-components';
import TopMenuBtn from '/components/layout/TopMenuBtn';
import { useState } from 'react';
import {TopMenu} from './style';



const AppLayout = ({ children }) => {

  //todo: dummy data delete
  const [menu, setMenu] = useState(
    [{ 
      key: 0,
      value: <img alt='기후' src='/images/typhoon.svg'/>,
      url: '/typhoon'
    },
    { 
      key: 1,
      value: <img alt='기후' src='/images/weather.svg'/>,
      url: '/weather'
    },
    { 
      key: 2,
      value: <img alt='기후' src='/images/climate.svg'></img>,
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
    {children}
  </>;

}

export default AppLayout;
