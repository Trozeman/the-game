import React from 'react';
import CellComponent from "./CellComponent";

class Cells {
    constructor() {
        this.items = [];
        this.count = 0;
    }
    addItem(){
        this.items.push(<CellComponent key={this.count} count={this.count} />);
        this.count++;
    }
    getItems() {
        return this.items;
    }
}

class RowComponent extends React.Component{

    constructor(props){
        super(props);
        this.items = new Cells();
    }

    generateItems(){
            for(let w = 0; w < this.props.cells; w++){
                this.items.addItem();
            }
    }
    render() {
        this.generateItems();
        return (
            <div className={'row'} >
                {this.items.getItems()}
            </div>
        );
    }
}

export default RowComponent;
