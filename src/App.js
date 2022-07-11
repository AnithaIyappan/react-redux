import './App.css';
import CakeContainer from './components/cakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceContainer from './components/iceContainer';
import { Provider } from 'react-redux';
import React, { Component } from 'react';
import store from './redux/store';


class App extends Component{
  render(){
    return(
      <Provider store={store}>
      <div className='App'>
        <CakeContainer />
        <HooksCakeContainer />
        {/* <UserContainer /> */}
        <IceContainer />
      </div>
      </Provider>
    )
  }
}

export default App;


