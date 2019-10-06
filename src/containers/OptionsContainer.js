import React from 'react';
import OptionsComponent from "../components/OptionsComponent";
import {connect} from "react-redux";
import {UpdateGameSize, UpdateUserName} from "../store/actions/GameActions";
import {bindActionCreators} from "redux";


class optionsContainer extends React.Component {

    difficulty = name => {
        console.log(name);
    };

    gameSize = size => {
        console.log(size);
        this.props.updateBordSize({type: "SET_BORD_SIZE", size: size});
    };

    changeUserName = value => {
        this.props.updateUserName({type: "SET_USER", user: value});
    };

    render() {
        const {store} = this.props;
        return (

            <OptionsComponent
                setDifficulty={this.difficulty}
                setGameSize={this.gameSize}
                setUserName={this.changeUserName}
                store={store}/>

        );
    }
}

const mapStateToProps = (state) => {
    return ({
        cell: state.activeCell
    });
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        updateUserName: UpdateUserName,
        updateBordSize: UpdateGameSize,
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(optionsContainer);
