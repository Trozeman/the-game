import GameReducer from './GameReducer';
import CellReducer from "./CellReducer";
import ScoreReducer from "./ScoreReducer";
import { combineReducers } from "redux";

const index = combineReducers(
    {
        game: GameReducer,
        score: ScoreReducer,
        activeCell: CellReducer,
    }
);

export default index
