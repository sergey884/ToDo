'use strict';
import React, { Component } from 'react';

class Todo extends Component {
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
        const { item : { text, isCompleted } } = this.props;

        return (
            <li onClick={ this.toggleTodo } style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>
                {text}
                <button onClick={this.deleteTodo}>Delete Task</button>
            </li>
        );
    }
}

export default Todo;