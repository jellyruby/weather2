const initialState = {
  primaryColor: '#2196f3',
  textColor: '#fff',
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