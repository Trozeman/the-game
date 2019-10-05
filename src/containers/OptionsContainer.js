import React from 'react';
import OptionsComponent from "../components/OptionsComponent";
import {connect} from "react-redux";


class optionsContainer extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {

        const {store} = this.props;
        // console.log(store);
        return (
            <div>
                <OptionsComponent store={store}/>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return ({
        cell: state.activeCell
    });
};

export default connect(mapStateToProps, null)(optionsContainer);
// export default gridContainer;