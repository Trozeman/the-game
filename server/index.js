const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


class DB {
    constructor(initialData) {
        this.data = initialData;
    }
    get leaderBoard() {
        return this.data.players
    }
    get options() {
        return this.data.options
    }

    addWinner(name) {
        this.data.players.push(
            {
                name,
                date: new Date()
            }
        )
    }
}

const initialData = {
    options: {
        field: [3, 5, 7, 9],
        delay: [1000, 700, 500, 300]
    },
    players: [
        {
            name: "Firs",
            date: new Date()
        },
        {
            name: "Nik",
            date: new Date()
        }
    ]
};

const dataBase = new DB(initialData);

app.post('/winners', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    dataBase.addWinner(req.body.name);
    res.status(201);
    res.send(JSON.stringify(dataBase.leaderBoard));
});

app.get('/game-settings', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200);
    res.send(JSON.stringify(dataBase.options));
});

app.get('/winners', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200);
    res.send(JSON.stringify(dataBase.leaderBoard));
});


app.listen(4000, () =>
    console.log('Express server is running on localhost:4000')
);
