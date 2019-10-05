import React from 'react';
import OptionsComponent from "../components/OptionsComponent";
import {connect} from "react-redux";


class optionsContainer extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        const {store} = this.props;
        return (

                <OptionsComponent store={store}/>

        )
    }
}
const mapStateToProps = (state) => {
    return ({
        cell: state.activeCell
    });
};

export default connect(mapStateToProps, null)(optionsContainer);
