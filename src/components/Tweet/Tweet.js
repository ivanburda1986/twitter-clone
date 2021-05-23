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

import {toggleLike} from '../../actions/toggleLike';


export default function Tweet ({avatarURL, id, text, author, authorName, timestamp, likes, replies, replyingTo}){
  const dispatch = useDispatch();
  
  const showLikesIcon = () => {
    let icon = <AiOutlineHeart className={classes.icon}/>
    if (likes.includes("tylermcginnis")) {
      icon = <AiFillHeart className={[classes.icon, classes.redHeart].join(" ")}/>
    }
    return icon;
  }

  const handleToggleLike = (e) => {
    e.preventDefault();
    
    dispatch(toggleLike({ id: id, hasLiked: likes.includes("tylermcginnis"), authedUser: "tylermcginnis"}))
    console.log("Dispatched:", { id: id, hasLiked: likes.includes("tylermcginnis"), authedUser: "tylermcginnis"});
    return false;
  }

  return(
    <li>
      <Link to={"/tweets/"+id} className={classes.tweet}>
        <img src={avatarURL} alt={"Avatar image of " + authorName} className={classes.avatarImg}/>
        <div className={classes.tweetInfo}>
          <div className={classes.tweetHeader}>
            <p className={classes.authorName}>{authorName}</p>
            <p className={classes.secondaryText}>{getHumanDate(timestamp)}</p>
            {replyingTo? <p className={classes.secondaryText}>Replying to @{replyingTo}</p> : null}
          </div>
          <div className={classes.tweetBody}>
            {text}
          </div>
          <div className={classes.tweetFooter}>
            <button><RiReplyLine className={classes.icon}/> <p>{replies}</p></button>
            <button onClick={(e)=>handleToggleLike(e)}>{showLikesIcon()} <p>{likes.length}</p></button>
          </div>
        </div>
      </Link>
    </li>
  );

}