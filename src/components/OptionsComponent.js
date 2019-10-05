import React from 'react';
import './OptionsStyles.css'; // style module like (import styles from "./file.css") is not work -_-

class optionsComponent extends React.Component{
    render() {
        return (
            <div className={'wrapper'}>
                <label>
                    Select difficulty:
                    <select  >
                        {/*<option value="123"  selected={'selected'}>Select difficulty</option>*/}
                        <option value="1">Baby</option>
                        <option value="2">Schoolboy</option>
                        <option value="3">Normally</option>
                        <option value="4">Brutal</option>
                        <option value="5">Impossible</option>
                    </select>
                </label>
                <label>
                    Select grid size:
                    <select  >
                        {/*<option value="123"  selected={'selected'}>Select grid size</option>*/}
                        <option value="3">3</option>
                        <option value="5">5</option>
                        <option value="7">7</option>
                        <option value="9">9</option>
                        <option value="11">11</option>
                    </select>
                </label>



                <button onClick={this.startLoop}>
                    Start
                </button>
            </div>
        );
    }
}

export default optionsComponent;
