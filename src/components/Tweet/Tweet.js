import React from 'react';
import classes from './Tweet.module.css';
import {AiOutlineHeart} from 'react-icons/ai';
import {AiFillHeart} from 'react-icons/ai';
import {RiReplyLine} from 'react-icons/ri';

import { Link } from 'react-router-dom';

import {getHumanDate} from '../../utils/convertors';


export default function Tweet ({avatarURL, id, text, authorName, timestamp, likes, replies, replyingTo}){
  const showLikesIcon = () => {
    let icon = <AiOutlineHeart/>
    if (likes > 0) {
      icon = <AiFillHeart className={classes.redHeart}/>
    }
    return icon;
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
            <span><RiReplyLine/> <p>{replies}</p></span>
            <span>{showLikesIcon()} <p>{likes}</p></span>
          </div>
        </div>
      </Link>
    </li>
  );

}