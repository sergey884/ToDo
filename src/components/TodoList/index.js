'use strict';
import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import TodoItem from '../TodoItem';
import './TodoList.css';

class TodoList extends Component {
  render() {
    const { tasks, toggleTodo, deleteTodo } = this.props;

    return (
      <ListGroup>
        <TransitionGroup className="todo-list">
          {tasks && tasks.map((item, index) => (
            <CSSTransition
              key={index}
              timeout={500}
              classNames="item"
            >
              <TodoItem
                key={index}
                id={index}
                item={item}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup>
    );
  }
}

export default TodoList;