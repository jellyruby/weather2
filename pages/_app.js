import PropTypes from 'prop-types';
import Head from 'next/head';
import wrapper from '../store/configureStore';
import {useSelector} from 'react-redux';
import {ThemeProvider} from 'styled-components';
import '/public/reset.css';
import '/public/main.css';
import Script from "next/script";


const Weather = ({ Component }) => {

  const theme = useSelector(state => state.theme);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta charSet="utf-8" />
        <Script type="text/javascript" src={"//dapi.kakao.com/v2/maps/sdk.js?appkey=627b526c0349f618a7ebf8ba106a1a04"}></Script> //todo.. APIKEY를 env에 빼기
        <title> 페이지 </title>
      </Head>
      <Component />
    </ThemeProvider>
  );


}

Weather.propTypes = {

  Component: PropTypes.elementType.isRequired,

}

export default wrapper.withRedux(Weather);