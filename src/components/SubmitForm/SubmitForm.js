import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import classes from './SubmitForm.module.css';

import {handleAddTweet} from '../../actions/tweets';
import { Redirect } from 'react-router';

export default function SubmitForm({id}) {
  const dispatch = useDispatch();
  const [text, setText] = React.useState("");
  const [toHome, setToHome] = React.useState(false);

  const submitTweet = (e) => {
    e.preventDeault();
    dispatch(handleAddTweet(text, id));
    setText("");
    setToHome(id ? false: true);
    return false;
  }

  const handleChange = (e)=>{
    setText(e.target.value);
  }

  if(toHome === true){
    return <Redirect to="/"/>
  }

  return (
    <form className={classes.SubmitForm} onSubmit={submitTweet}>
            <textarea 
      id="newTweetInput" 
      name="newTweetInput" 
      row="10" 
      cols="50" 
      placeholder="What's happening?"
      value={text}
      onChange={handleChange}
      maxLength={280}
      >
        
      </textarea>
      <button
      type="submit"
      disabled={text === ""}
      >Submit</button>

    </form>
  )
}
