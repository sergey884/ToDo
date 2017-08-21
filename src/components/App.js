'use strict';
import React, { Component } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

class TodoApp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        const { todo, todoActions : { addNewTodo, toggleTodo } } = this.props;
        return (
            <div>
                <AddTodo addNewTodo = {addNewTodo} />
                <TodoList tasks={todo} toggleTodo={toggleTodo} /*visibilityFilter={visibilityFilter}*/ />
            </div>
        );
    }
}

export default TodoApp;