import './App.css';
import CakeContainer from './components/cakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceContainer from './components/iceContainer';
import NewCakeContainer from './components/newCakeContainer';
import UserContainer from './components/userContainer';
import { Provider } from 'react-redux';
import React, { Component } from 'react';
import store from './redux/store';
import ItemContainer from './components/itemContainer';


class App extends Component{
  render(){
    return(
      <Provider store={store}>
      <div className='App'>
        <ItemContainer cake />
        <ItemContainer />
        <CakeContainer />
        <HooksCakeContainer />
        <NewCakeContainer />
        <IceContainer />
        <UserContainer />
      </div>
      </Provider>
    )
  }
}

export default App;


