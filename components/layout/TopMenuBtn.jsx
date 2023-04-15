import {useRef} from 'react';
import Link from 'next/link';

const TopMenuBtn = ({ url ,value }) => {

  const aRef = useRef(null);

  const onClick = () => {
    aRef.current.click();
  }

  return <div onClick={onClick}>
    <Link ref={aRef} href={url}>{value}</Link>
  </div>
  ;
}

export default TopMenuBtn;
