'use strict';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todoActions from '../actions/TodoActions';
import TodoApp from '../components/App';

/*
class App extends Component {
    render() {
        return (
            <div>
                <p>Hello from App Container</p>
            </div>
        );
    }
};*/

const mapStateToProps = (state) => ({
    todo : state.todo
});

const mapDispatchToAction = (dispatch) => ({
    todoActions : bindActionCreators(todoActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToAction)(TodoApp);