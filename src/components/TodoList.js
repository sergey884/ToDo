'use strict';
import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { tasks, toggleTodo, deleteTodo } = this.props;
        const list = tasks.map((item, index) => {
            return (<Todo key={index}
                          id={index}
                          item={item}
                          toggleTodo={toggleTodo}
                          deleteTodo={deleteTodo}
            />);
        });
        return (
            <div>
                {list}
            </div>
        );
    }
}

export default TodoList;