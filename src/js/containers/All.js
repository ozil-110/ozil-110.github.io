import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import  actions from '../actions/index.js';
import CellView from '../components/CellView.js';

class All extends Component {
  componentDidMount() {
    const { actions} = this.props;
    actions.requestIssues();
  }

  render() {
    if (this.props.isFetching) {
      return null;
    }

    return (
      <div className="list">
        <CellView title="全部" items={this.props.items} />
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
function mapDispatchToProps(dispatch) {
  return {actions:bindActionCreators(actions,dispatch)}
}

export default connect(mapStateToProps,mapDispatchToProps)(All);
