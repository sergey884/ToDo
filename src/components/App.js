'use strict';
import React, { Component } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Filter from '../containers/Filter';

class TodoApp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        const { todo, todoActions : { actionAddTodo, actionToggleTodo } } = this.props;
        return (
            <div>
                <AddTodo addNewTodo = {actionAddTodo} />
                <TodoList tasks={todo} toggleTodo={actionToggleTodo} /*visibilityFilter={visibilityFilter}*/ />
                <Filter />
            </div>
        );
    }
}

export default TodoApp;