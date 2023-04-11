import PropTypes from 'prop-types';
import Head from 'next/head';
import wrapper from '../store/configureStore';


const NodeBird = ({ Component }) => {

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

NodeBird.propTypes = {

  Component: PropTypes.elementType.isRequired,

}

export default wrapper.withRedux(NodeBird);