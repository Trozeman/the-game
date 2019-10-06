const UpdateUserName = (state) => {
    return{
        type: "SET_USER",
        user: state.user
    }
};

const UpdateGameSize = (state) => {
    console.log(state);
    return{
        type: "SET_BORD_SIZE",
        size: state.size
    }
};


export {UpdateUserName, UpdateGameSize};
