import React, { Component } from 'react';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import { CONFIG } from '../constants/Config.js';
import NProgress from 'nprogress';

import '../../css/reset.scss';
import '../../css/fonts.scss';
import '../../css/index.scss';
import '../../css/list.scss';
import '../../css/nprogress.scss';

setTimeout(function(){
  //利用iframe的onload事件刷新页面
  document.title = CONFIG.title;
  var iframe = document.createElement('iframe');
  iframe.style.visibility = 'hidden';
  iframe.style.width = '1px';
  iframe.style.height = '1px';
  iframe.onload = function () {
    setTimeout(function () {
      document.body.removeChild(iframe);
    }, 0);
  };
  document.body.appendChild(iframe);
},0);

const appHistory = useRouterHistory(createHashHistory)();
//按需异步加载分片打包
const routes = {
  childRoutes:[{
    path:'/',
    component:require('./Main.js').default,
    indexRoute:{
      getComponent(location,cb) {
        require.ensure([],require=>{
          cb(null,require('../components/Menu.js').default)
        },'Menu')
      }
    },
    childRoutes:[{
      path:'all',
      getComponent(location,cb) {
        document.title = CONFIG.titleLoad;
        NProgress.start();
        require.ensure([],require=>{
          cb(null,require('./All.js').default)
        },'all')
      }
    },{
      path:'archive',
      getComponent(location,cb) {
        document.title = CONFIG.titleLoad;
        NProgress.start();
        require.ensure([],require=>{
          cb(null,require('./Archive.js').default)
        },'archive')
      }
    },{
      path:'tags',
      getComponent(location,cb) {
        document.title = CONFIG.titleLoad;
        NProgress.start();
        require.ensure([],require=>{
          cb(null,require('./Tags.js').default)
        },'tags')
      }
    },{
      path:'search',
      getComponent(location,cb) {
        document.title = CONFIG.titleLoad;
        NProgress.start();
        require.ensure([],require=>{
          cb(null,require('./search.js').default)
        },'search')
      }
    },{
      path:'post/:id',
      getComponent(location,cb) {
        document.title = CONFIG.titleLoad;
        NProgress.start();
        require.ensure([],require=>{
          cb(null,require('./Post.js').default)
        },'post')
      }
    }]
  }]
};
//const routes = (
// <Route path="/" component={App}>
//    <IndexRoute component={Menu} />
//    <Route path="all" getComponent={All} />
//    <Route path="archive" getComponent={Archive} />
//    <Route path="tags" getComponent={Tags} />
//    <Route path="search" getComponent={Search}/>
//    <Route path="post/:id" getComponent={Post} />
//  </Route>
//);

//export default class Root extends Component {
//  render() {
//    return <Router history={appHistory} routes={routes} />
//  }
//};
export default routes;