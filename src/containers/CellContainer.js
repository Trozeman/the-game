import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {getCell} from '../store/actions/CellActions';
import {PlayerPoint , CPUPoint} from '../store/actions/ScoreActions';
import {Cell} from '../components/CellComponent';


class CellContainer extends React.Component {
    timeout = null;

    constructor(props) {
        super(props);
        this.state = {
            active: false,
        }
    }

    getStyle() {
        let state = '';
        if (this.props.cell && this.props.cell === this.props.index) {
            state = 'ready'
        } else {
            if (this.state.winner) {
                clearTimeout(this.timeout);
                switch (this.state.winner) {
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
            this.setState({ready: false, winner: 'player'});
            clearTimeout(this.timeout);

        }
    };


    render() {
        if (this.props.cell === this.props.index && !this.state.ready) {
            this.timeout = setTimeout(() => {
                this.setState({ready: false, winner: 'cpu'});
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
