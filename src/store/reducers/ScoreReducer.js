const ScoreReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SCORE_TO_PLAYER':
            return {
                ...state,
                player: ++state.player
            };
        case 'SCORE_TO_CPU':
            return {
                ...state,
                cpu: ++state.cpu
            };
        case 'REFRESH_SCORE':
            return {
                cpu: 0,
                player: 0
            };
        default:
            return state
    }
};

export default ScoreReducer;
