import {RECEIVE_USERS} from '../actions/users';

export default function users(state = {}, action){
  switch(action.type){
    case RECEIVE_USERS:
      // console.log('Reducers received users:',action.users);
      // console.log('Reducers received tweets:',action.tweets);
      return {
        ...state,
        ...action.users
      };
    default: return state;
  }
}