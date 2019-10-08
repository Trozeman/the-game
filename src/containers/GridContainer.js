import React from 'react';
import GridComponent from "../components/GridComponent";
import {UpdateUserName, UpdateActiveCell} from "../store/actions/GameActions"
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import GameController from '../game-controller'


class gridContainer extends React.Component {

    constructor(props) {
        super(props);
        this.timer = null;
        this.controller = new GameController();

    }

    startLoop = () => {
        if (this.props.game.onProgress) {
            this.timer = setInterval(() => {
                if (this.controller.cellsIndexes.length <= 0) {
                    return clearInterval(this.timer);
                }
                this.props.setActiveCell({type: "SET_ACTIVE_CELL", index: this.controller.cell()});
            }, 1000);
        }
    };

    render() {
        this.controller.setup(this.props.game.size);
        const {user} = this.props.game;
        this.startLoop();
        return (
            <div>
                <h1>{user}</h1>
                <GridComponent
                    game={this.props.game}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        game: state.game,
    });
};


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        updateUserName: UpdateUserName,
        setActiveCell: UpdateActiveCell
    }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(gridContainer);
