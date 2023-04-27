const initialState = {
  contentClicked: false,
};

export const SET_CLICKED = 'SET_CLICKED';

const contentReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CLICKED:
      
      console.log(
        {
          ...state,
          ...action.data,
        }
      )

      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};

export const setClicked = (data) => {
  return {
    type: SET_CLICKED,
    data,
  }
}

export default contentReducer;

