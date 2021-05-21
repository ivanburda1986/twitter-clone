import {RECEIVE_DATA} from '../actions/receiveData';

export default function receiveData(state = {users:{}, tweets:{}}, action){
  switch(action.type){
    case RECEIVE_DATA:
      // console.log('Reducers received users:',action.users);
      // console.log('Reducers received tweets:',action.tweets);
      return {
        ...state,
        users: action.users,
        tweets: action.tweets,
      };
    default: return state;
  }
}