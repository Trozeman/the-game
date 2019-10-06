import React from 'react';
import './OptionsStyles.css'; // style module like (import styles from "./file.css") is not work -_-
import Select from "react-select";

class optionsComponent extends React.Component {


    handleDifficulty = (selectedOption) => {
        this.props.setDifficulty(+selectedOption.value);
        console.log(`Option selected:`, selectedOption);
    };
    handleSize = (selectedOption) => {
        this.props.setGameSize(+selectedOption.value);
    };
    handleName = (event) => {
        this.props.setUserName(event.target.value);
    };
    handleStart = () => {
        this.props.startGame(true);
    };


    OptionsComponent = (status) => {

        const diff = [
            {value: '1', label: 'Baby'},
            {value: '2', label: 'Schoolboy'},
            {value: '3', label: 'Rock'},
            {value: '4', label: 'Brutal'},
            {value: '5', label: 'Impossible'},
        ];
        const size = [
            {value: '3', label: '3'},
            {value: '5', label: '5'},
            {value: '7', label: '7'},
            {value: '9', label: '9'},
        ];

        if (status) return (<></>);
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
    };

    render() {
        return (
            this.OptionsComponent(this.props.gameStatus)
        );
    }
}


export default optionsComponent;
