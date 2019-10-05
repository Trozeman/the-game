const gameReducer = (state = {}, action) => {

    switch (action.type) {
        case 'START_GAME':
            return {
                ...state.game,
                size: action.size,
                difficulty: action.difficulty,
                onProgress: action.progress
            };
        case 'SET_USER':
            console.log( {
                ...state,
                user: action.user,
            }, "new");
            return {
                ...state,
                user: action.user
            };
        case 'GAME_OVER':
            return {
                ...state.game,
                    onProgress: false
            };
        default:
            return state
    }
};


const startGame = (state, action) => ({
    ...state,
    game: {
        user: '',
        size: action.size,
        difficulty: action.difficulty,
        onProgress: action.progress
    }
});


export default gameReducer;
