import React from 'react';
import GridComponent from "../components/GameComponent";
import {UpdateUserName, UpdateActiveCell} from "../store/actions/GameActions"
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import GameController from '../game-controller'


class gameContainer extends React.Component {

    constructor(props) {
        super(props);
        this.timer = null;
        this.controller = new GameController();
    }

    startLoop = () => {
        if (this.props.game.onProgress) {
            this.timer = setInterval(() => {
                if ((this.props.game.size * this.props.game.size) / 2 <= this.props.score.cpu) {
                    //TODO set winner
                    clearInterval(this.timer);
                    return this.timer = null;
                }
                if ((this.props.game.size * this.props.game.size) / 2 <= this.props.score.player) {
                    //TODO set winner
                    clearInterval(this.timer);
                    return this.timer = null;
                }
                if (this.controller.cellsIndexes.length <= 0) {
                    clearInterval(this.timer);
                    return this.timer = null;
                }
                this.props.setActiveCell({type: "SET_ACTIVE_CELL", index: this.controller.cell()});
            }, this.props.game.difficulty);
        }
    };




    render() {
        if (!this.timer) {
            this.controller.setup(this.props.game.size);
            this.startLoop();
        }
        const {user} = this.props.game;
        return (
            <div>
                <h1>{user}</h1>
                <GridComponent
                    game={this.props.game}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return ({
        game: state.game,
        score: state.score,
    });
};


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        updateUserName: UpdateUserName,
        setActiveCell: UpdateActiveCell
    }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(gameContainer);
