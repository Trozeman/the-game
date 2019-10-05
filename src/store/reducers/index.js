import GameReducer from './GameReducer';
import CellReducer from "./CellReducer";
import { combineReducers } from "redux";

const index = combineReducers(
    {
        game: GameReducer,
        score: CellReducer,
        size: CellReducer,
        activeCell: CellReducer,
    }
);

export default index
