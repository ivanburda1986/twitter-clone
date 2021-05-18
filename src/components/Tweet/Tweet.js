import React from 'react';
import classes from './Tweet.module.css';
import { Link } from 'react-router-dom';

export default function Tweet ({avatarURL, id, text, author, timestamp, likes, replies, replyingTo}){

  return(
    <li>
      <Link>
        <img src={avatarURL} alt=""/>
      </Link>
    </li>
  );

}