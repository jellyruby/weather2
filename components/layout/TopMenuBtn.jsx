import {useRef} from 'react';

const TopMenuBtn = ({ url ,value }) => {

  const aRef = useRef(null);

  const onClick = () => {
    aRef.current.click();
  }

  return <div onClick={onClick}>
    <a ref={aRef} href={url}>{value}</a>
  </div>
  ;
}

export default TopMenuBtn;
