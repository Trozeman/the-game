const UpdateUserName = (state) => {
    return {
        type: "SET_USER",
        user: state.user
    }
};
const UpdateGameSize = (state) => {
    return {
        type: "SET_BORD_SIZE",
        size: state.size
    }
};
const UpdateGameDifficulty = (state) => {
    return {
        type: "SET_GAME_DIFFICULTY",
        difficulty: state.difficulty
    }
};
const StartGame = (state) => {
    return {
        type: "START_GAME",
        onProgress: state.onProgress
    }
};
const GameOver = (winner) => {
    return {
        type: "GAME_OVER",
        onProgress: false,
        winner: winner,
        size: null
    }
};

const UpdateActiveCell = (index) => {
    return {
        type: "SET_ACTIVE_CELL",
        index: index
    }
};


export {
    UpdateUserName,
    UpdateGameSize,
    UpdateGameDifficulty,
    StartGame,
    GameOver,
    UpdateActiveCell
};
