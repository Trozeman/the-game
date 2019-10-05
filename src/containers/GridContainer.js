import React from 'react';
import GridComponent from "../components/GridComponent";
import {connect} from "react-redux";


class gridContainer extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {

        const {store} = this.props;
        console.log(store);
        return (
            <div>
                <GridComponent store={store}/>
            </div>
            )
    }
}
const mapStateToProps = (state) => {
    return ({
        cell: state.activeCell
    });
};

export default connect(mapStateToProps, null)(gridContainer);
// export default gridContainer;