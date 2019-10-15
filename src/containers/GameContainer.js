import React from 'react';
import GridComponent from "../components/GameComponent";
import {UpdateUserName, UpdateActiveCell, GameOver} from "../store/actions/GameActions";
import {Restart} from "../store/actions/ScoreActions";
import {postReq, getReq} from '../services';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import GameController from '../game-controller';
import LeaderBord from '../components/LeaderBordComponent';

class gameContainer extends React.Component {

    constructor(props) {
        super(props);
        this.timer = null;
        this.controller = new GameController();
    }

    setActiveCell = (index) => {
        this.props.setActiveCell(index);
    };

    setWinner = (winner) => {
        this.props.setWinner(winner);
    };

    startLoop = () => {
        this.timer = setInterval(() => {
            if ((this.props.game.size * this.props.game.size) / 2 <= this.props.score.cpu && this.props.game.size > 0) {
                this.setActiveCell(null);
                clearInterval(this.timer);
                this.timer = null;
                this.props.restart();
                this.setWinner("CPU");
                this.controller.restart();
                return;
            }
            if ((this.props.game.size * this.props.game.size) / 2 <= this.props.score.player && this.props.game.size > 0) {
                clearInterval(this.timer);
                this.setActiveCell(null);
                this.timer = null;
                this.props.restart();
                this.controller.restart();
                postReq("/winners", {name: this.props.game.user, date: new Date()})
                    .then(res => {
                        this.setState({users: res});
                    })
                    .then(() => {
                        this.toggleBord();
                    });
                this.setWinner(this.props.game.user);
                return;
            }
            if (this.controller.cellsIndexes.length <= 0) {
                clearInterval(this.timer);
                this.timer = null;
                return;
            }
            this.setActiveCell(this.controller.cell());
        }, this.props.game.difficulty);

    };

    toggleBord = () => {
        this.setState({scoreShow: !this.state.scoreShow});
    };

    componentDidMount() {
        getReq("/winners")
            .then(res => {
                this.setState({users: res});
            });
    }

    render() {
        const {user, winner, onProgress} = this.props.game;

        if (onProgress && !this.timer) {
            this.controller.setup(this.props.game.size);
            this.startLoop();
        }

        let message = winner && !onProgress ? user === winner ? <h2 className={"won"}>You won!</h2> :
            <h2 className={"lose"}>Computer won X_X</h2> : <></>;

        return (
            <div>
                <div className={"header"}>
                    <h1>{user}</h1>
                    {message}
                    <button onClick={this.toggleBord}>Leader bord</button>
                </div>
                <GridComponent
                    game={this.props.game}
                />
                <LeaderBord {...this.state} handler={this.toggleBord}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return ({
        game: state.game,
        score: state.score,
    });
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        updateUserName: UpdateUserName,
        setActiveCell: UpdateActiveCell,
        setWinner: GameOver,
        restart: Restart
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(gameContainer);
