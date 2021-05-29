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
    const tweetsArray = Object.values(useSelector((state)=>state.tweets)).sort((a,b)=>b.timestamp-a.timestamp);

    React.useEffect(()=>{
      dispatch(handleInitialData());
    },[dispatch]);
    const displayTweets = () => {
  
      let tweetElements = [];
      if(tweetsArray.length > 0){
        tweetsArray.map((tweet)=>tweetElements.push(<Tweet
          key={tweet.id}
          id = {tweet.id}
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