'use strict';

export function showAll() {
    return {
        type : "SHOW_ALL"
    }
}

export function showCompleted() {
    return {
        type : "SHOW_COMPLETED"
    }
}

export function showProgress() {
    return {
        type : "SHOW_ACTIVE"
    }
}