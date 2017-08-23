'use strict';

export function actionAddTodo(text) {
    return {
        type : "ADD_TODO",
        payload : text
    }
}

export function actionToggleTodo(id) {
    return {
        type : "TOGGLE_TODO",
        payload : id
    }
}