import {saveLikeToggle, saveTweet} from '../utils/api';


export const RECEIVE_TWEETS = "RECEIVE_TWEETS";
export const TOGGLE_TWEET = "TOGGLE_TWEET";
export const ADD_TWEET = "ADD_TWEET";

export function receiveTweets (tweets){
  return{
    type: RECEIVE_TWEETS,
    tweets
  }
}

function toggleTweet ({ id, hasLiked, authedUser }){
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
    // if(!response.ok){
    //   throw new Error (`HTTP error! status: ${response.status}`);
    // };
    dispatch(toggleTweet(info));
  }
}

function addTweet(tweet){
  return{
    type: ADD_TWEET,
    tweet,
  }
}

export function handleAddTweet(info){
  return async(dispatch)=>{
    let response = await saveTweet(info);
    console.log(response);
    dispatch(addTweet(response));
  }
}


