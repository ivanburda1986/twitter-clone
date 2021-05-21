import {getInitialData} from '../utils/api';

//Actions types
export const RECEIVE_DATA = "RECEIVE_DATA";

//Actions
function receiveData({users,tweets}){
  // console.log(users);
  // console.log(tweets);
  return{
    type: RECEIVE_DATA,
    users,
    tweets
  }
}

//Async
export function handleInitialData(){
  return async(dispatch) =>{
    let response = await getInitialData();
    return dispatch(receiveData(response));
  }
}