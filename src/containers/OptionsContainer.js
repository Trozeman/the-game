import React from 'react';
import OptionsComponent from "../components/OptionsComponent";
import {connect} from "react-redux";


class optionsContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    difficulty(name) {
        console.log(name);
    }

    gameSize(size) {
        console.log(size);
    }


    render() {
        const {store} = this.props;
        return (

            <OptionsComponent
                setDifficulty={this.difficulty}
                setGameSize={this.gameSize}
                store={store}/>

        );
    }
}

const mapStateToProps = (state) => {
    return ({
        cell: state.activeCell
    });
};

export default connect(mapStateToProps, null)(optionsContainer);
