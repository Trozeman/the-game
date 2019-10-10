import React from 'react';
import OptionsComponent from "../components/OptionsComponent";
import {connect} from "react-redux";
import {UpdateGameSize, UpdateUserName, UpdateGameDifficulty, StartGame} from "../store/actions/GameActions";
import {bindActionCreators} from "redux";
import {getReq} from '../services';

class optionsContainer extends React.Component {


    componentDidMount() {
        getReq('/game-settings')
            .then(res => this.setState(res));
    }

    render() {
        return (
            <OptionsComponent {...this.props}  {...this.state} />
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
