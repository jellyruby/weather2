import { HYDRATE } from 'next-redux-wrapper';
import theme from './theme';
import { combineReducers } from 'redux';

const initialState = {
  user:{

  },
  post:{

  }
  
}



const rootReducer = combineReducers({
  
  index: (state = initialState, action) => {

    switch(action.type){
      case HYDRATE:
        return {...state, ...action.payload};
      default:
        return state;
    }

  },
  user,
  post  

});



export default rootReducer;
