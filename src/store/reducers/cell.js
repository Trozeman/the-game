const cell = (state = {}, action) => {
    switch (action.type) {
        case 'SET_ACTIVE_CELL':
            return action.index;
        case 'GET_CELL':
            return action.index;
        default:
            return state
    }
};

export default cell;