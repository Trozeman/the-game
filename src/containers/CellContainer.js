import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {getCell} from '../store/actions/CellActions';
import {PlayerPoint , CPUPoint} from '../store/actions/ScoreActions';
import {Cell} from '../components/CellComponent';


class CellContainer extends React.Component {
    timeout = null;
    winner = null;
    getStyle() {
        let state = '';
        if (this.props.cell && this.props.cell === this.props.index) {
            state = 'ready'
        } else {
            if (this.winner) {
                clearTimeout(this.timeout);
                switch (this.winner) {
                    case 'player': {
                        state = 'player';
                        break;
                    }
                    default: {
                        state = 'cpu';
                    }

                }
            }
        }
        return state
    }

    checkStep = () => {
        if (this.props.cell === this.props.index) {
            this.props.playerPoint();
            this.winner = 'player';
            clearTimeout(this.timeout);

        }
    };


    render() {
        if (this.props.cell === this.props.index) {
            this.timeout = setTimeout(() => {
                this.winner = 'cpu';
                this.props.CPUPoint();
                clearTimeout(this.timeout);
            }, this.props.timeout);
        }

        return (<Cell style={this.getStyle()} {...this.props} clickHandler={this.checkStep}/>);

    }
}


const mapStateToProps = (state) => {
    return ({
        cell: state.activeCell
    });
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({select: getCell, playerPoint: PlayerPoint, CPUPoint: CPUPoint}, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(CellContainer);
