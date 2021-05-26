import {getInitialData} from '../utils/api';

import receiveUsers from './users';
import receiveTweets from './tweets';

export default function handleInitialData() {
  return async (dispatch) => {
    let response = await getInitialData();
    dispatch(receiveUsers(response.users));
    dispatch(receiveTweets(response.tweets));
  }
}