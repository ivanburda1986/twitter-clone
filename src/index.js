//React
import * as React from 'react';

//React-dom
import * as ReactDOM from 'react-dom';

//React-router-dom
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

//Redux
import {createStore} from 'redux';
import reducer from './reducers';
import middleware from './middleware';

//React-redux
import {Provider, useSelector, useDispatch} from 'react-redux';

//Styles
import './index.css';

//Components
import ColorfulBorder from './components/ColorfulBorder/ColorfulBorder';
import Tweet from './components/Tweet/Tweet';
import { handleInitialData } from './actions/shared';


function App () {
    const dispatch = useDispatch();

    React.useEffect(()=>{
      dispatch(handleInitialData());
    },[dispatch])

    return(
      <div className='container'>
        <Tweet/>
      </div>
    )

}

//Store creation
const store = createStore(
  reducer,
  middleware
)


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
     <BrowserRouter>
        <ColorfulBorder />
        <App />
     </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)