import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {Router,Route,hashHistory} from 'react-router';
import { createStore } from 'redux';
import configureStore from './store/configureStore.js';
import routes from './containers/Root.js';

const initState = window.__INITIAL_STATE__;
let store = configureStore(initState);

// let store;

// if (__DEV__) {
//   let mockStore = {
//     isFetching: false,
//     items: [{
//       body: "前端的性能优化一直是一个非常重要的事情，由于JavaScrip是单线程执行很容易与UI渲染法是阻塞",
//       created_at: '2017-06-08T12:51:06Z',
//       labels: [{
//         name: '前端'
//       }],
//       number: 1,
//       title: '前端优化'
//     }, {
//       body: '由于自己错过了3 4月份的暑假实习的招聘，直到6月才开始投简历希望得到暑假实习的机会，在招聘',
//       created_at: '2017-06-11T07:40:05Z',
//       labels: [{
//         name: '随笔'
//       }],
//       number: 2,
//       title: '关于投简历'
//     }, {
//       body: 'JavaScript中操作二进制数据是通过ArrayBuffer对象，TypedArray视图和DataView视图实现，',
//       created_at: '2017-06-14T03:28:58Z',
//       labels: [{
//         name: '前端'
//       }, {
//         name: ''
//       }],
//       number: 5,
//       title: 'ArrayBuffer'
//     }]
//   };

render(
  <Provider store={store}>
     <Router history={hashHistory}>
        {routes}
       </Router>
  </Provider>,
  document.getElementById('container')
);