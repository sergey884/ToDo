'use strict';

function actionTodo(text) {
    return {
        type : "ADD_TODO",
        payload : text
    }
}

function actionToggleTodo(id) {
    return {
        type : "TOGGLE_TODO",
        payload : id
    }
}

export function addNewTodo(text) {
    return dispatch => {
        dispatch(actionTodo(text));
    }
}

export function toggleTodo(id) {
    return dispatch => {
        dispatch(actionToggleTodo(id));
    }
}