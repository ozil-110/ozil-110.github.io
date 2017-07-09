import React, { Component } from 'react';
import { connect } from 'react-redux';
import NProgress from 'nprogress';
import { CONFIG } from '../constants/Config.js';
import '../constants/back.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.addBaiduAnaly = this.addBaiduAnaly.bind(this);
  }

  componentDidMount() {
    // 添加百度统计
    this.addBaiduAnaly();

    document.title = CONFIG.title;

    if (!this.props.isFetching) {
      NProgress.done();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.isFetching) {
      document.title = CONFIG.title;
      NProgress.done();
    }
  }

  addBaiduAnaly() {
    if (document.domain.indexOf('github.io') > -1) {
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement('script');
        hm.src = '//hm.baidu.com/hm.js?' + CONFIG['baiduAnaly'];
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(hm, s);
      })();
    }
  }

  render() {
    return (
      <div>
        <div className="back"></div>
        <div className="nav">
          <div id="logo">
            <a href="#/">ozil-110.github.io</a>
          </div>
          <div id="linkId">
            <a href="https://github.com/ozil-110" className="github"></a>
            <a href="https://stackoverflow.com/users/8112580/liulang?tab=profile" className="stackoverflow"></a>
          </div>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  const {postIssues} = state;
  const {
    isFetching,
    items
  } = postIssues || {
    isFetching: true,
    items: []
  };

  return {
    isFetching,
    items
  }
}

export default connect(mapStateToProps)(App);
