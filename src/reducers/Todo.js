'use strict';
import * as type from '../constants/Todo';

const initialState = [
  {
    text: 'First task',
    isCompleted: false
  }
];

const todo = (state = initialState, action) => {
  switch (action.type) {
    case type.ADD_TODO:
      let newTodo = {
        text: action.payload,
        isCompleted: false
      };
      return [...state, newTodo];
    case type.TOGGLE_TODO:
      return state.map(item => {
        return item === action.payload ? { ...item, isCompleted: !item.isCompleted } : item;
      });
    case type.DELETE_TODO:
      return state.filter(item => {
        return item !== action.payload;
      });
    default:
      return state;
  }
}

export default todo;