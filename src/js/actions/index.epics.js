import actions from './index';
import { Observable } from 'rxjs/Rx';
import { ajax } from 'rxjs/observable/dom/ajax';
import { REQUEST_ISSUES, RECEIVE_ISSUES } from '../constants/ActionTypes.js';
import { CONFIG } from '../constants/Config.js';

let url = `https://api.github.com/repos/${CONFIG.owner}/${CONFIG.repo}/issues`;
export const fetchIssuesEpic = action$ =>
  action$.ofType(REQUEST_ISSUES)
    .mergeMap(action =>
       ajax.getJSON(url)
         .map(response => actions.receiveIssues(response))  
    );
