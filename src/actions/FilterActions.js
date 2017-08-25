'use strict';
import * as type from '../constants/Filter';

export function showAll() {
    return {
        type : type.SHOW_ALL
    }
}

export function showCompleted() {
    return {
        type : type.SHOW_COMPLETED
    }
}

export function showProgress() {
    return {
        type : type.SHOW_ACTIVE
    }
}