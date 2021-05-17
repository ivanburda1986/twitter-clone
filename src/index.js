import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';



import ColorfulBorder from './components/ColorfulBorder/ColorfulBorder';


class App extends React.Component{


  render(){

    return(
      <div className='container'>

      </div>
    )
  }
}


ReactDOM.render(
  <React.StrictMode>
    <ColorfulBorder />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)