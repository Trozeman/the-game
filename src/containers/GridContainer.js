import React from 'react';
import GridComponent from "../components/GridComponent";
import GameReducers from "../store/reducers/index";
import {UpdateUserName} from "../store/actions/GameActions"
import {connect} from "react-redux";
import {bindActionCreators} from "redux";


class gridContainer extends React.Component{

    render() {
        const {store} = this.props;
        const name = this.props.game.user;

        return (
            <div>
                <h1>{name}</h1>
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
        cell: state.activeCell,
        red: GameReducers
    });
};


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        updateUserName:UpdateUserName
    }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(gridContainer);
