import { useState, useEffect } from 'react';
import { Map, MapMarker } from "react-kakao-maps-sdk"

//https://www.npmjs.com/package/react-kakao-maps-sdk 내용확인해서 추가개발

const WeatherMap = () => {

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

      // const mapContainer = document.getElementById('map'), // 지도를 표시할 div 
      // mapOption = { 
      //     center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
      //     level: 3 // 지도의 확대 레벨
      // };
  
      // // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
      // const  map = new kakao.maps.Map(mapContainer, mapOption); 

    } else {
      alert('GPS권한이 없습니다. ');
    }
  

  }, []);


  

  return(
    
    <>
      <Map
      center={{ lat: 33.5563, lng: 126.79581 }}
      style={{ width: "100%", height: "360px" }}
      >
      <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
        <div style={{ color: "#000" }}>Hello World!</div>
      </MapMarker>
    </Map>
      
    
    </>
    

  )

}

export default WeatherMap;