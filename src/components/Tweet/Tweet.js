//React
import React from 'react';

//React-redux
import {useSelector, useDispatch} from 'react-redux';

import classes from './Tweet.module.css';
import {AiOutlineHeart} from 'react-icons/ai';
import {AiFillHeart} from 'react-icons/ai';
import {RiReplyLine} from 'react-icons/ri';

import { Link } from 'react-router-dom';

import {getHumanDate} from '../../utils/convertors';
import {handleToggleTweet} from '../../actions/tweets';



export default function Tweet ({id}){
  const dispatch = useDispatch();

  console.log("ID:", id);

  const authedUser = "tylermcginnis";
  const tweets = useSelector((state)=>state.tweets);
  const users = useSelector((state)=>state.users);
  const tweet = tweets[id];
  
  const showLikesIcon = () => {
    let icon = <AiOutlineHeart className={classes.icon}/>
    if (tweet.likes.includes("tylermcginnis")) {
      icon = <AiFillHeart className={[classes.icon, classes.redHeart].join(" ")}/>
    }
    return icon;
  }

  const handleLike = (e) => {
    e.preventDefault();
    dispatch(handleToggleTweet({
      id: id,
      hasLiked: tweet.likes,
      authedUser
    }))
    return false;
  }

  const evaluateReplyingTo = (tweetId) =>{
    if(tweetId){
      return <p className={classes.secondaryText}>Replying to @{tweet.replyingTo ? tweets[tweet.replyingTo].author: null}</p>
    }
  }

  return(
    <li>
      <Link to={"/tweet/"+id} className={classes.tweet}>
        <img src={users[tweet.author].avatarURL} alt={"Avatar image of " + users[tweet.author].name} className={classes.avatarImg}/>
        <div className={classes.tweetInfo}>
          <div className={classes.tweetHeader}>
            <p className={classes.authorName}>{users[tweet.author].name}</p>
            <p className={classes.secondaryText}>{getHumanDate(tweet.timestamp)}</p>
            {evaluateReplyingTo(tweet.replyingTo)}
          </div>
          <div className={classes.tweetBody}>
            {tweet.text}
          </div>
          <div className={classes.tweetFooter}>
            <button><RiReplyLine className={classes.icon}/> <p>{tweet.replies.length}</p></button>
            <button onClick={(e)=>handleLike(e)}>{showLikesIcon()} <p>{tweet.likes.length}</p></button>
          </div>
        </div>
      </Link>
    </li>
  );

}