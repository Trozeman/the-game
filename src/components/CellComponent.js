import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {getCell} from '../store/actions/cellActions';

class CellComponent extends React.Component {
    timeout = null;
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    getWinner() {
        // console.log(this);
        let state = '';
        if (this.props.cell && this.props.cell ===  this.props.index ) {
            state = 'ready'
        }else {
            if (this.state.winner) {
                clearTimeout(this.timeout);
                switch (this.state.winner) {
                    case 'player':{
                        state = 'player';
                        break;
                    }
                    default:{
                        state = 'cpu';
                    }

                }
            }
        }
        return state
    }



    checkStat = () => {
        // this.props.select(this.props, {action:"GET_CELL",index: 1});

        console.log(this.props);

        if (this.props.cell === this.props.index ) {
            clearTimeout(this.timeout);
            this.setState({ready: false, winner: 'player'});
        }
    };



    render() {
        if (this.props.cell && this.props.cell === this.props.index) {
            this.timeout = setTimeout(()=>{
                this.setState({ready: false, winner: 'cpu'});
                clearTimeout(this.timeout);
            }, 3000);
        }
        return (<h1 ref={this.props.index} className={this.getWinner()} onClick={this.checkStat}>{this.props.index}
        </h1>);

    }
}



const mapStateToProps = (state) => {
    return ({
        cell: state.activeCell
    });
};
const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({select:getCell}, dispatch);
};


export default connect(mapStateToProps, matchDispatchToProps)(CellComponent);
