import React,{Component} from 'react';
import { connect } from 'react-redux';
import actions from '../actions/index.js';
import CellView from '../components/CellView.js';
import '../constants/match.js';
class Search extends Component {
    constructor(props) {
        super(props)
    }   
    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(actions.requestIssues());
    }
    render() { 
       return(
             <div>
                 <input type="text" placeholder="搜索"/>
                 <label id="select"></label>
                 <CellView items={this.props.items} />
             </div>
         );
    }
}
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

export default connect(mapStateToProps)(Search);
