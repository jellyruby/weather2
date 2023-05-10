import AppLayout from "/components/layout/AppLayout";
import ContentLayout from "/components/layout/ContentLayout";
import {useEffect,useState} from 'react';

function getLocation() {
  
  
}


const Weather = () => {

  const [location, setLocation] = useState({}); // [변수, 함수


  useEffect(() => {

    if (navigator.geolocation) {
      // GPS를 지원하면
      navigator.geolocation.getCurrentPosition(
        position => setLocation(position),
        error => console.error(error),
        {
          enableHighAccuracy: false,
          maximumAge: 0,
          timeout: 5000 },
      );
    } else {
      alert('GPS를 지원하지 않습니다. ');
    }
  

  }, []);

  console.log(location);


  return (
    <AppLayout>
      <ContentLayout col={3} row={3}>
        당신의 위치 lat:{location?.coords?.latitude} lon:{location?.coords?.longitude}
      </ContentLayout>
    </AppLayout>
  );
};

export default Weather;