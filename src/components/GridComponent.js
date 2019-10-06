import React from 'react';
import {connect} from 'react-redux';
import Cell from "./CellComponent";
import Options from "../containers/OptionsContainer";


class Game extends React.Component {
    timeout = 500;

    cells = (i) => {
        let cells = [];

        for (let q = i * this.props.game.size; q < (this.props.game.size * i) + this.props.game.size; q++) {
            cells.push(<Cell key={q} index={q+1}/>);
        }
        return cells;
    };

    rows = () => {
        let rows = [];
        for (let q = 0; q < this.props.game.size; q++) {
            rows.push(
                <Rows key={q}>
                    {this.cells(q)}
                </Rows>);
        }
        return rows;
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
                <div className={'game--wrapper'}>
                    {this.rows()}
                </div>
                <Options/>
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


const mapStateToProps = (state) => {
    return ({
        data: state
    });
};



export default connect(mapStateToProps, null)(Game);
