import React from 'react';
import './OptionsStyles.css'; // style module like (import styles from "./file.css") is not work -_-
import Select from "react-select";

class optionsComponent extends React.Component {

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
        if (this.props.playerName.length < 3) {
            alert("Please write your name! \n That must have 3 symbols or more \n 😉");
            return
        }
        this.props.startGame({type: "START_GAME", onProgress: true});
    };

    OptionsComponent = (status) => {

        let  delay = [];

        const labels = [
            'Baby',
            'Schoolboy',
            'Rock',
            'Brutal',
            'Impossible',
        ];

        const size = [];

        if (this.props.delay) {
            delay =  this.props.delay.map((value, index)=>{
               return  {value: "" + value, label: labels[index]};
            });
        }

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
                        options={delay}
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
                        value={this.props.playerName}
                        placeholder={"Your mane..."}
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
        return (
            this.OptionsComponent(this.props.gameStatus)
        );
    }
}


export default optionsComponent;
