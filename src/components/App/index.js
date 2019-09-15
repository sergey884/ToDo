'use strict';
import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import AddTodo from '../AddTodo';
import TodoList from '../TodoList';
import Filter from '../../containers/Filter';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class TodoApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todo, todoActions: { actionAddTodo, actionToggleTodo, actionDeleteTodo } } = this.props;
    return (
      <Container style={{ marginTop: '2rem' }}>
        <AddTodo addNewTodo={actionAddTodo} />
        <TodoList
          tasks={todo}
          toggleTodo={actionToggleTodo}
          deleteTodo={actionDeleteTodo}
        />
        <Filter />
      </Container>
    );
  }
}

export default TodoApp;