//React
import * as React from 'react';

//React-dom
import * as ReactDOM from 'react-dom';

//React-router-dom
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

//Redux
import {createStore, compose, applyMiddleware} from 'redux';
import reducer from './reducers';

import thunk from 'redux-thunk';

//React-redux
import {Provider} from 'react-redux';

//Styles
import './index.css';

//Components
import ColorfulBorder from './components/ColorfulBorder/ColorfulBorder';
import HomeFeed from './containers/HomeFeed/HomeFeed';
import Navigation from './components/Navigation/Navigation';
import NewTweetPage from './containers/NewTweet/NewTweetPage';
import TweetDetail from './containers/TweetDetail/TweetDetail';


//Store creation
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunk))
)


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
     <BrowserRouter>
        <ColorfulBorder />
        <Navigation/>
        <Switch>
          <Route path="/" exact component={HomeFeed}/>
          <Route path="/new" exact component={NewTweetPage}/>
          <Route path="/tweet/:id" component={TweetDetail}/>
          <Redirect to="/"/>
        </Switch>
     </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)