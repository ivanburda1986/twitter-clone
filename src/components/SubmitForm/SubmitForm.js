import React from 'react'
import classes from './SubmitForm.module.css';

export default function SubmitForm() {
  return (
    <div className={classes.SubmitForm}>
      <label for="newTweetInput"></label>
      <textarea id="newTweetInput" name="newTweetInput" row="10" cols="50" placeholder="What's happening?">
        
      </textarea>
      <button>Submit</button>
    </div>
  )
}
