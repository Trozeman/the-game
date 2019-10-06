const ScoreReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SCORE_TO_PLAYER':
            return action.index;
        case 'SCORE_TO_CPU':
            return action.index;
        default:
            return state
    }
};

export default ScoreReducer;
