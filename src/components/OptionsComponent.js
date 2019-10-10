import React from 'react';
import './OptionsStyles.css'; // style module like (import styles from "./file.css") is not work -_-
import Select from "react-select";

class optionsComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    // TODO action creators

    handleDifficulty = (selectedOption) => {
        this.props.updateGameDiff({type: "SET_GAME_DIFFICULTY", difficulty: +selectedOption.value});
    };
    handleSize = (selectedOption) => {
        this.props.updateBordSize({type: "SET_BORD_SIZE", size: +selectedOption.value});
    };
    handleName = (event) => {
        this.props.updateUserName({type: "SET_USER", user: event.target.value});
    };
    handleStart = () => {
        this.props.startGame({type: "START_GAME", onProgress: true});
    };

    OptionsComponent = (status) => {

        const diff = [
            {value: '1', label: 'Baby'},
            {value: '2', label: 'Schoolboy'},
            {value: '3', label: 'Rock'},
            {value: '4', label: 'Brutal'},
            {value: '5', label: 'Impossible'},
        ];
        const size = [];

        if (this.props.field) {
            this.props.field.forEach((value)=>{
                size.push({value: "" + value, label: "" + value});
            });
        }

        if (status) {
            return (<></>)
        } else {
            return (<div className={'wrapper'}>
                <label>
                    Select difficulty:
                    <Select
                        options={diff}
                        onChange={this.handleDifficulty}
                    />
                </label>
                <label>
                    Select grid size:
                    <Select
                        options={size}
                        onChange={this.handleSize}
                    />
                </label>
                <label>
                    Name:
                    <input
                        className={'name'}
                        type="text"
                        onChange={this.handleName}
                    />
                </label>
                <button onClick={this.handleStart}>
                    Start
                </button>
            </div>)
        }
    };

    render() {
        console.log(this.props.gameStatus);
        return (
            this.OptionsComponent(this.props.gameStatus)
        );
    }
}


export default optionsComponent;
