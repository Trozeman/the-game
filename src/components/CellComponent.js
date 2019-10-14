import React from 'react';

export const Cell = (props) => {
    return (<div className={["cell", props.style || ""].join(" ")}
                onClick={props.clickHandler}
    > </div>);
};
