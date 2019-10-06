const express = require('express');

const app = express();


app.get('/game-settings', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
        field: [3, 5, 7, 9],
        delay : [1000, 700, 500, 300]
    }));
});
app.get('/winners', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify([
        {
            name: "Firs",
            date: new Date()
        },
        {
            name: "Nik",
            date: new Date()
        }
    ]));
});

app.listen(4000, () =>
    console.log('Express server is running on localhost:4000')
);
