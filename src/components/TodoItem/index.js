'use strict';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListGroup, Button } from 'react-bootstrap';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  toggleTodo() {
    const { item, toggleTodo } = this.props;
    toggleTodo(item);
  }

  deleteTodo(e) {
    const { item, deleteTodo } = this.props;
    deleteTodo(item);
    e.stopPropagation();
  }

  render() {
    const { item: { text, isCompleted } } = this.props;

    return (
      <ListGroup.Item 
        className="d-flex flex-row justify-content-between" 
        style={{ marginTop: '0.5rem' }}
      >
        <div
          onClick={this.toggleTodo}
          style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}
        >
          {text}
        </div>
        <Button
          onClick={this.deleteTodo}>
          Delete Task
        </Button>
      </ListGroup.Item>
    );
  }
}

TodoItem.PropTypes = {
  item: PropTypes.shape({
    text: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired
  }),
  deleteTodo: PropTypes.func,
  toggleTodo: PropTypes.func
};

TodoItem.defaultProps = {
  item: {},
};

export default TodoItem;