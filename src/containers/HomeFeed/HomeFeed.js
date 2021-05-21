import React from 'react';

//React-redux
import {useSelector, useDispatch} from 'react-redux';

//Components
import Tweet from '../../components/Tweet/Tweet';
import { handleInitialData } from '../../actions/receiveData';

//Styles
import './HomeFeed.css';

export default function HomeFeed() {
    const dispatch = useDispatch();
    const users = useSelector((state)=>state.initialData.users);
    const tweets = Object.values(useSelector((state)=>state.initialData.tweets));

    React.useEffect(()=>{
      dispatch(handleInitialData());
    },[dispatch]);


    // console.log('My users', users);
    // console.log('My tweets', tweets);

    const displayTweets = () => {
      console.log('DisplayTweets', tweets);
      let tweetElements = [];
      if(tweets.length > 0){
        tweets.map((tweet)=>tweetElements.push(<Tweet
          key={tweet.id}
          id = {tweet.id}
          text = {tweet.text}
          author = {tweet.author}
          timestamp = {tweet.timestamp}
          likes = {tweet.likes.length}
          replies = {tweet.replies.length}
          replyingTo = {tweet.replyingTo}
        />));
      }
      return tweetElements;
    }

    return(
      
      <div className='container'>
        <ul>
          {displayTweets()}
        </ul>
      </div>
    )

}