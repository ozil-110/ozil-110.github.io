import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions/index.js';
import Article from '../components/Article.js';

import '../../css/zenburn.scss';
import '../../css/article.scss';
 
class Post extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(actions.fetchIssues());
  }

  render() {
    if (this.props.isFetching) {
      return null;
    }

    let view = [];
    this.props.items.map((item, index) => {
      if (parseInt(item.number) === parseInt(this.props.params.id)) {
        view.push(
          <Article {...item}  key={index} />
        );
      }
    });

    return (
      <div>
        {view}
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

export default connect(mapStateToProps)(Post);