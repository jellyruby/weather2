import {useState,useRef,useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { setClicked } from '/reducers/content'
import { StyledContent } from './style.jsx';
import Link from "next/link";



const Content = ({children,href}) => {
  
  const [click, setClick] = useState(false);  
  const [timer, setTimer] = useState(null); 
  const [position, setPosition] = useState({top:0,left:0});
  const dispatch = useDispatch();

  const LinkRef = useRef(null); 
  const ContentRef = useRef(null); 

  const onClick = () => {

    if(click === false) {

      setClick(!click);
      
      dispatch(setClicked({contentClicked:true}));
    }

  }

  useEffect (() => {
    
    setPosition(
      {
        top:ContentRef.current.getBoundingClientRect().top - (window.innerHeight * 0.14)+'px',
        left:ContentRef.current.getBoundingClientRect().left+'px'
      }
      );


    if (click === true) { 

      setTimer(setTimeout(() => {
         LinkRef.current.click();
      }, 1000));
    }

    return () => {
      clearTimeout(timer);
    }

  }, [click,LinkRef]);



  return (
    <>
      <StyledContent 
        onClick={onClick} isClicked ={click} 
        ref={ContentRef}
        top={position.top} left={position.left}
      >
          {children}
          <Link ref={LinkRef}  href={href??'/'} style={{display:'none'}}></Link>
                
      </StyledContent>
      {click && <StyledContent></StyledContent>}
    </>
  );


};

export default Content;