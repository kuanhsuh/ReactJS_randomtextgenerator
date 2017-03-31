import { combineReducers } from 'redux';
import TextRuducer from './reducer_text';

const rootReducer = combineReducers({
  text: TextRuducer
});

export default rootReducer;
