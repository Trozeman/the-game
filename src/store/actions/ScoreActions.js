export const PlayerPoint = () => {
    return{
        type: "SCORE_TO_PLAYER",
    }
};
export const CPUPoint = () => {
    return{
        type: "SCORE_TO_CPU",
    }
};
export const Restart = () => {
    return{
        type: "REFRESH_SCORE",
    }
};
