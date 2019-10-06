import React from 'react';
import OptionsComponent from "../components/OptionsComponent";
import {connect} from "react-redux";
import {UpdateGameSize, UpdateUserName, UpdateGameDifficulty, StartGame} from "../store/actions/GameActions";
import {bindActionCreators} from "redux";


class optionsContainer extends React.Component {

    // TODO actions creators GAME CHANGERS
    difficulty = diff => {
        this.props.updateGameDiff({type: "SET_GAME_DIFFICULTY", difficulty: diff});
    };

    gameSize = size => {
        this.props.updateBordSize({type: "SET_BORD_SIZE", size: size});
    };

    changeUserName = value => {
        this.props.updateUserName({type: "SET_USER", user: value});
    };

    startGame = value => {
        this.props.startGame({type: "START_GAME", onProgress: value});
    };

    render() {
        const {store} = this.props;
        return (
            <OptionsComponent
                setDifficulty={this.difficulty}
                setGameSize={this.gameSize}
                setUserName={this.changeUserName}
                startGame={this.startGame}
                gameStatus={this.props.gameStatus}
                store={store}/>
        );
    }
}

const mapStateToProps = (state) => {
    return ({
        gameStatus: state.game.onProgress
    });
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        updateUserName: UpdateUserName,
        updateBordSize: UpdateGameSize,
        updateGameDiff: UpdateGameDifficulty,
        startGame: StartGame,
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(optionsContainer);
