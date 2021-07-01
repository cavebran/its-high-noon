const express = require('express');
const app = express();

// To parse URL encoded data
app.use(express.urlencoded({ extended: false }));

// To parse json data
app.use(express.json());

app.get('/', (req, res) => { 
    res.send('Hello World!')
});

app.post('/', (req, res) => {
    res.send(req.body);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));