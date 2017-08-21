'use strict';
const initialState = [
        {
            text : "First task",
            isCompleted : false
        }
    ];

const todo = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_TODO" :
            let newTodo = {
                text : action.payload,
                isCompleted : false
            };
            return [...state, newTodo ];
        case "TOGGLE_TODO" :
            return state.map((item, index) => {
                return index === action.payload ? {...item, isCompleted : !item.isCompleted} : item;
            });
        default :
            return state;
    }
}

export default todo;