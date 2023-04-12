import PropTypes from 'prop-types';
import Head from 'next/head';
import wrapper from '../store/configureStore';
import {useSelector} from 'react-redux';
import {ThemeProvider} from 'styled-components';
import '/public/reset.css';


const Weather = ({ Component }) => {

  const theme = useSelector(state => state.theme);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta charSet="utf-8" />
        
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