import { FETCH_DATA } from '../actions/index';

export default function(state = "Loading...", action){
  switch(action.type){
  case FETCH_DATA:
    return action.payload.data.text;
  default:
    return state;
  }

}
