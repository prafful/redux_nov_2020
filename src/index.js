import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducersCombined from './reducers/reducer-allcombined';
import RootComponent from './rootcomponent/root';

const reduxStore = createStore(allReducersCombined)
console.log("Store is created....")
console.log(reduxStore);

ReactDOM.render(
  <Provider store={reduxStore}>
    <RootComponent></RootComponent>
  </Provider>
,
  document.getElementById('root')
);

