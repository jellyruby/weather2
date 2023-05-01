import styled from "styled-components";

export const TopMenu = styled.div`

  z-index: 100;
  //그리드
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-template-areas: "main main main";

  width: 100%;
  
  text-align: center;


  & > div  {
    
    display: grid;
    justify-content: center;
    align-items: center;

    //박스 크기 변경
    height: 14vh;

    //애니메이션 효과
    transition: all 0.2s ease-in-out; 

    //테마 색상
    color: ${props => props.theme.bgtextColor};
    background-color: ${props => props.theme.bgColor};

    //그림자 효과
    box-shadow: 0 0.05vw 0 0 ${props => props.theme.shadowColor};

  }

  & img {
    width: 5vh;
  }

  & > div:nth-child(even) {
    background-color: ${props => props.theme.bgColorB};

  }


  
  & > div:hover {
    height: 38vh;
    
    cursor : pointer;
    color: ${props => props.theme.textColor};
    background-color: ${props => props.theme.Color};
    box-shadow : 0 0 0 0 
  }

  & > div:hover:nth-child(even) {
    background-color: ${props => props.theme.ColorB};
  }

`;
