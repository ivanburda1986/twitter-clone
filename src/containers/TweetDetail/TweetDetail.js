import React from 'react'
import {useParams} from 'react-router-dom';

import Tweet from '../../components/Tweet/Tweet';
import SubmitForm from '../../components/SubmitForm/SubmitForm';

export default function TweetDetail() {
  const {id} = useParams();
  console.log(id);
  return (
    <div>
      <Tweet id={id}/>
      <SubmitForm/>
    </div>
  )
}

  