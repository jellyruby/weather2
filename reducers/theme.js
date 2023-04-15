const initialState = {
  primaryColor: '#153A74CC',
  textColor: '#000000FF',
  bgtextColor: '#000000AA',
  Color: '#CDE6F555',
  ColorB: '#DE560C11',
  bgColor: '#FFFFFFFF',
  bgColorB: '#FFFFFFFF',
  shadowColor: '#0000001F',
  
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