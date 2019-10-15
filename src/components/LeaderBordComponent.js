import React from 'react';
const Bord = (props) => {
    const data = props.users? props.users.map((user, index) => {
        return index < 7 ? <li key={index}>{user.name} <span>{user.date}</span></li> : false;
    }): <p className={"load"}>Loading...</p>;
    if(!props.scoreShow) return <></>;
    return (
        <div className={"leader-bord"}>
            <ul>
                {data}
            </ul>
            <button onClick={props.handler}>
                Close
            </button>
        </div>
    );
};


export default Bord;
