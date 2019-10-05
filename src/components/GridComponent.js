import React from 'react';
import {connect} from 'react-redux';
import Cell from "./CellComponent";
import {bindActionCreators} from "redux";
import {getCell} from "../store/actions/cellActions";
import Options from "../containers/OptionsContainer";


class Game extends React.Component {
    grid = [];
    timeout = 500;

    constructor(props){
        super(props);
        this.state = props.store.getState();
    }


    generate() {
        if(!this.qwe){
            for (let i = 1; i < this.props.data.game.size * this.props.data.game.size +1; i++) {
                this.grid.push(i)
            }
            this.qwe = true
        }
    }

    cells = (i) => {
        let w = [];
        let s = i * this.props.data.game.size +1;
        for (let q = s; q < (this.props.data.game.size * i) + this.props.data.game.size +1; q++) {
            w.push(<Cell key={q} index={q}/>);
        }
        return w;
    };
    rows = () => {
        let w = [];
        for (let q = 0; q < this.props.data.game.size; q++) {
            w.push(
                <Rows key={q}>
                    {this.cells(q)}
                </Rows>);
        }
        return w;
    };

    handleDrawer = (index) => {
            this.props.store.dispatch({type: 'SET_ACTIVE_CELL', index});
    };

    startLoop = () => {
        this.gameLoop = setInterval(
            () => {
                let q = Math.floor(Math.random() * this.grid.length);
                this.handleDrawer(this.grid[q]);
                this.grid.splice(q,1);
                console.log(this.grid);
            }
            , this.timeout);

        setTimeout(() => {
            clearInterval(this.gameLoop);
        }, 500 * 9);
    };

    render() {
        this.generate();
        return (
            <div className={'game'}>
                <div>
                <Options />
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
    return bindActionCreators({select:getCell}, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(Game);