import { combineEpics } from 'redux-observable';
import { fetchIssuesEpic } from '../actions/index.epics';

export default combineEpics(fetchIssuesEpic);
