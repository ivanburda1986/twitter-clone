//React
import * as React from 'react';
import * as ReactDOM from 'react-dom';

//Redux
import {createStore} from 'redux';
import reducer from './reducers';
import middleware from './middleware';

//React-redux
import {Provider} from 'react-redux';

//Styles
import './index.css';

//Components
import ColorfulBorder from './components/ColorfulBorder/ColorfulBorder';


class App extends React.Component{


  render(){

    return(
      <div className='container'>

      </div>
    )
  }
}

//Store creation
const store = createStore(
  reducer,
  middleware
)


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ColorfulBorder />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)