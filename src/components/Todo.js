'use strict';
import React, { Component } from 'react';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.toggleTodo = this.toggleTodo.bind(this);
    }

    toggleTodo() {
        const { id, toggleTodo } = this.props;
        console.log("ID", id);
        toggleTodo(id);
    }

    render() {
        const { name, isCompleted } = this.props;
       // console.log("ID", id, this.props);
        return (
            <li onClick={ this.toggleTodo } style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>
                {name}
            </li>
        );
    }
}

export default Todo;