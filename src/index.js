import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import store from './store/index'
import {Provider} from 'react-redux'


ReactDOM.render(
  //通过Provider获取store的数据
  <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);

