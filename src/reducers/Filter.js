'use strict';

const filter = (state="SHOW_ALL", action) => {
    switch(action.type) {
        case "SHOW_ALL":
            return action.type;
        case "SHOW_COMPLETED":
            return action.type;
        case "SHOW_ACTIVE":
            return action.type;
        default : return state;
    }
}

export default filter;