import React from 'react';


class CellComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            status: false,
            winner: null
        };
    }

    clickHandler(e) {
        console.log(e.target);
        this.setState(() => ({
            status: true
        }));
        if (this.state.status) {
            console.log('status = True');
        }
        e.target.classList.toggle('active');
    }
    render() {
        return (
            <h1 onClick={(e) => {
                this.clickHandler(e)
            }}>
               {this.props.count}
            </h1>
        );
    }
}

export default CellComponent;
