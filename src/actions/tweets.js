import {saveLikeToggle} from '../utils/api';


export const RECEIVE_TWEETS = "RECEIVE_TWEETS";
export const TOGGLE_TWEET = "TOGGLE_TWEET";

export function receiveTweets (tweets){
  return{
    type: RECEIVE_TWEETS,
    tweets
  }
}

function toggleTweet ({ id, hasLiked, authedUser }){
  console.log("From toggleTweet: ", id)
  return{
    type: TOGGLE_TWEET,
    id,
    hasLiked,
    authedUser
  }
}

export function handleToggleTweet(info){
  return async (dispatch) => {
    let response = await saveLikeToggle(info);
    console.log("REsponse: ",response);
    // if(!response.ok){
    //   throw new Error (`HTTP error! status: ${response.status}`);
    // };
    dispatch(toggleTweet(info));
  }
}


