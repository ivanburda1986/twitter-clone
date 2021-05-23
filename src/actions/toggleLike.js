import {saveLikeToggle} from '../utils/api';

//Actions types
export const TOGGLE_LIKE = "TOGGLE_LIKE";

//Actions
function receiveToggledLike(tweets){
  // console.log(users);
   console.log(tweets);
  return{
    type: TOGGLE_LIKE,
    tweets
  }
}

//Actions
export function toggleLike(info){
  console.log("Toggle async received payload: ", info);
  return async(dispatch) =>{
    let response = await saveLikeToggle(info);
    return dispatch(receiveToggledLike(response));
  }
}
