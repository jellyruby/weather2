import { HYDRATE } from 'next-redux-wrapper';
import theme from './theme';
import content from './content';
import { combineReducers } from 'redux';



const rootReducer = combineReducers({
  
  index: (state = {}, action) => {

    switch(action.type){
      case HYDRATE:
        return {...state, ...action.payload};
      default:
        return state;
    }

  },
  theme,
  content

});



export default rootReducer;
