import React from 'react';
import {connect} from 'react-redux';
import Cell from "./CellComponent";
import {bindActionCreators} from "redux";
import {getCell} from "../store/actions/CellActions";
import Options from "../containers/OptionsContainer";


class Game extends React.Component {
    timeout = 500;

    cells = (i) => {
        let w = [];

        console.log( "q - ", i * this.props.game.size);
        console.log( "Size - ", (this.props.game.size * i) + this.props.game.size);

        for (let q = i * this.props.game.size; q < (this.props.game.size * i) + this.props.game.size; q++) {
            w.push(<Cell key={q} index={q}/>);
        }

        return w;
    };
    rows = () => {
        console.log(this.props.game.size);
        let s = [];
        for (let q = 0; q < this.props.game.size; q++) {
            s.push(
                <Rows key={q}>
                    {this.cells(q)}
                </Rows>);
        }
        console.log(s);
        return s;

    };

    handleDrawer = (index) => {
        // this.props.store.dispatch({type: 'SET_ACTIVE_CELL', index});
    };

    startLoop = () => {
        this.gameLoop = setInterval(
            () => {
                let q = Math.floor(Math.random() * this.grid.length);
                this.handleDrawer(this.grid[q]);
                this.grid.splice(q, 1);
                console.log(this.grid);
            }
            , this.timeout);

        setTimeout(() => {
            clearInterval(this.gameLoop);
        }, 500 * 9);
    };

    render() {
        return (
            <div className={'game'}>
                <div>
                    <Options/>
                    {this.rows()}
                </div>

            </div>
        );
    }

}


const Rows = (props) => {
    return (
        <div className={'row'}>
            {props.children}
        </div>
    );
};


// export default Game;

const mapStateToProps = (state) => {
    return ({
        data: state
    });
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({select: getCell}, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(Game);
