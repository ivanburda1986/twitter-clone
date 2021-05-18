import React from 'react';
import classes from './Tweet.module.css';
import { Link } from 'react-router-dom';

export default function Tweet ({avatarURL, id, text, author, timestamp, likes, replies, replyingTo}){

  return(
    <li>
      <Link to={"/tweets/"+id} className="tweet">
        <img src={avatarURL} alt={"Avatar image of" + author} className="avatarImg"/>
        <div className="tweetInfo">
          <div className="tweetHeader">
            <p>{author}</p>
            <p className="secondaryText">{timestamp}</p>
            {replyingTo? <p className="secondaryText">Replying to @{replyingTo}</p> : null}
          </div>
          <div className="tweetBody">
            {text}
          </div>
          <div className="tweetFooter">
            
          </div>
        </div>
      </Link>
    </li>
  );

}