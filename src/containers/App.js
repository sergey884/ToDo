'use strict';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todoActions from '../actions/TodoActions';
import TodoApp from '../components/App';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.isCompleted);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.isCompleted);
  }
}

const mapStateToProps = (state) => ({
  todo: getVisibleTodos(state.todo, state.filter)
});

const mapDispatchToAction = (dispatch) => ({
  todoActions: bindActionCreators(todoActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToAction)(TodoApp);