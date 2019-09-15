'use strict';
import * as type from '../constants/Filter';

const filter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case type.SHOW_ALL:
    case type.SHOW_COMPLETED:
    case type.SHOW_ACTIVE:
      return action.type;
    default: return state;
  }
};

export default filter;