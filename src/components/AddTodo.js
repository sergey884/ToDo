'use strict';
import React, { Component } from 'react';

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const value = this.textInput.value;
        const { addNewTodo } = this.props;
        addNewTodo(value);
        this.textInput.value = '';
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type = "text" ref = { input => this.textInput = input }/>
                    <button type="submit">Add ToDo</button>
                </form>
            </div>
        );
    }
}

export default AddTodo;