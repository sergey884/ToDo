'use strict';
import * as type from '../constants/Todo';

export function actionAddTodo(text) {
    return {
        type : type.ADD_TODO,
        payload : text
    }
}

export function actionToggleTodo(item) {
    return {
        type : type.TOGGLE_TODO,
        payload : item
    }
}

export function actionDeleteTodo(item) {
    return {
        type : type.DELETE_TODO,
        payload : item
    }
}