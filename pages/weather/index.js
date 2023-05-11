import AppLayout from "/components/layout/AppLayout";
import ContentLayout from "/components/layout/ContentLayout";

import WeatherMap from '/components/WeatherMap';



const Weather = () => {



  return (
    <AppLayout>
      <ContentLayout col={3} row={3}>
        <WeatherMap/>
      </ContentLayout>
    </AppLayout>
  );
};

export default Weather;