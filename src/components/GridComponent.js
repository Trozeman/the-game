import React from 'react';
import RowComponent from "./RowComponent";


class Grid extends React.Component {
    constructor(Props) {
        super(Props);
        this.state = {
            options: {
                gridSize: 5
            },
            gridSize: 5,
        };
        this.bord = null;
    }

    generateBoard() {
        const size = this.state.gridSize;
        this.bord = new Array(size * size).fill(null);
    }

    gameLoop() {
        let q;

        do {
            q = Math.floor(Math.random() * this.bord.length);
            this.bord[q] = 'step';
        }
        while (!this.bord[q]);

        let win = this.bord.filter((i) => i === 'step').length;


        if (win >= Math.round(this.bord.length / 2)) {
            console.log('Winner!');
        }
    }

    static clickHandler(e) {
        console.log(e.target);
        if (e.target.tagName === 'H1') {
            console.dir(e.target);
            e.target.classList.toggle('active');
        }
    }

    render() {
        this.generateBoard();
        const items = [];
        for (let i = 0; i < Math.round(this.bord.length / this.state.gridSize); i++) {
            items.push(<RowComponent key={i} cells={this.state.gridSize}/>);
        }


        return (
            <div className={'grid-wrapper'}>
                {items}
                <button onClick={() => {
                    setInterval(() => {
                        this.gameLoop();
                    }, 1000);
                }}>
                    Start
                </button>
            </div>

        );
    }


}

export default Grid;
