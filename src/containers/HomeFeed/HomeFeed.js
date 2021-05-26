import React from 'react';

//React-redux
import {useSelector, useDispatch} from 'react-redux';

//Components
import Tweet from '../../components/Tweet/Tweet';
import handleInitialData from '../../actions/shared';

//Styles
import './HomeFeed.css';

export default function HomeFeed() {
    const dispatch = useDispatch();
    const users = useSelector((state)=>state.users);
    const tweets = useSelector((state)=>state.tweets);
    const tweetsArray = Object.values(useSelector((state)=>state.tweets)).sort((a,b)=>b.timestamp-a.timestamp);

    React.useEffect(()=>{
      dispatch(handleInitialData());
    },[dispatch]);


    console.log('My users', users);
    console.log('My tweets', tweets);

    const displayTweets = () => {
  
      let tweetElements = [];
      if(tweetsArray.length > 0){
        tweetsArray.map((tweet)=>tweetElements.push(<Tweet
          key={tweet.id}
          avatarURL={users[tweet.author].avatarURL}
          id = {tweet.id}
          text = {tweet.text}
          author = {tweet.author}
          authorName = {users[tweet.author].name}
          timestamp = {tweet.timestamp}
          likes = {tweet.likes}
          replies = {tweet.replies.length}
          replyingTo = {tweet.replyingTo ? tweets[tweet.replyingTo].author : null}
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