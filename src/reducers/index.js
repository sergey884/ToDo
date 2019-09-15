'use strict';
import { combineReducers } from 'redux';
import todo from './Todo';
import filter from './Filter';

export default combineReducers({
  todo,
  filter
});
