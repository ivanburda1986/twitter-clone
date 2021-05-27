import {getInitialData} from '../utils/api';

import receiveUsers from './users';
import {receiveTweets} from './tweets';
import {setAuthedUser} from './authedUser';

const AUTHED_ID = 'tylermcginnis';

export default function handleInitialData() {
  return async (dispatch) => {
    let response = await getInitialData();
    dispatch(receiveUsers(response.users));
    dispatch(receiveTweets(response.tweets));
    dispatch(setAuthedUser(AUTHED_ID));
  }
}