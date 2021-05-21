import {combineReducers} from 'redux';
import receiveData from './receiveData';

export default combineReducers({
  initialData: receiveData,
});