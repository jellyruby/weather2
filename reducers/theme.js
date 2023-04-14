const initialState = {
  primaryColor: '#153A74CC',
  textColor: '#000000FF',
  bgtextColor: '#000000AA',
  Color: '#CDE6F5FF',
  ColorB: '#DE560C99',
  bgColor: '#CDE6F599',
  bgColorB: '#DE560C22',
  shadowColor: '#00000011',
  
};

const SET_THEME = 'SET_THEME';

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        ...action.theme,
      };
    default:
      return state;
  }
};

export default themeReducer;