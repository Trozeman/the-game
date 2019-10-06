export default class Game {
    constructor(){
        this.cellsIndexes = [];
    }

    setup(size){
        this.cellsIndexes = [];
        for(let c = 0; c < size * size; c++){
            this.cellsIndexes.push(c+1);
        }
    }

    restart(){
        this.cellsIndexes =[];
    }

    cell(){
        let random ;
        do {
            random = Math.round(Math.random() * this.cellsIndexes.length);
        }
        while (!this.cellsIndexes[random] && this.cellsIndexes[0]);

        let index = this.cellsIndexes[random];

        this.cellsIndexes.splice(random, 1);
        return index;
    }
}
