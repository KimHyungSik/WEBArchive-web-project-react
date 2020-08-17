import { combineReducers } from 'redux'; // 흩어진 reducer 들을 하나로 모아준다.

import siteList from './siteList';

const rootReducer = combineReducers({
  siteList,
});

export default rootReducer;
