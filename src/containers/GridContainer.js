import React from 'react';
import GridComponent from "../components/GridComponent";
import {UpdateUserName} from "../store/actions/GameActions"
import {connect} from "react-redux";
import {bindActionCreators} from "redux";


class gridContainer extends React.Component {

    render() {
        const {user} = this.props.game;
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
        updateUserName: UpdateUserName
    }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(gridContainer);
