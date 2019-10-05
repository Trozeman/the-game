import GameReducer from './game';
import CellReducer from "./cell";
import { combineReducers } from "redux";

const index = combineReducers(
    {
        game: GameReducer,
        score: GameReducer,
        size: GameReducer,
        activeCell: CellReducer,
    }
);

export default index