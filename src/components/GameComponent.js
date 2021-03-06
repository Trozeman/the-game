import React from 'react';
import Cell from "../containers/CellContainer";
import OptionsContainer from "../containers/OptionsContainer";


class Game extends React.Component {
    cells = (i) => {
        let cells = [];
        for (let q = i * this.props.game.size; q < (this.props.game.size * i) + this.props.game.size; q++) {
            cells.push(<Cell key={q} index={q + 1} timeout={this.props.game.difficulty} />);
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

    render() {
        return (
            <div className={'game'}>
                <div className={'game--wrapper'}>
                    {this.rows()}
                </div>
                <OptionsContainer playerName={this.props.game.user}/>
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


export default Game;
