const gameReducer = (state = {}, action) => {

    switch (action.type) {
        case 'START_GAME':
            return {
                ...state,
                onProgress: action.onProgress
            };
        case 'SET_USER':
            if (action.user.length >= 15){
                return {...state}
            }
            return {
                ...state,
                user: action.user
            };
        case 'SET_GAME_DIFFICULTY':
            return {
                ...state,
                difficulty: action.difficulty
            };
        case 'SET_BORD_SIZE':
            return {
                ...state,
                size: action.size
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


/*const startGame = (state, action) => ({
    ...state,
    game: {
        user: '',
        size: action.size,
        difficulty: action.difficulty,
        onProgress: action.progress
    }
});*/


export default gameReducer;
