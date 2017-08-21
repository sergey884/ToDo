'use strict';
import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { tasks, toggleTodo, visibilityFilter } = this.props;
        console.log(tasks, visibilityFilter);
        const list = tasks.map((item, index) => {
            console.log(index);
            return (<Todo key={index} id={index} name={item.text} isCompleted={item.isCompleted} toggleTodo={toggleTodo} />);
        });
        return (
            <div>
                {list}
            </div>
        );
    }
}

export default TodoList;