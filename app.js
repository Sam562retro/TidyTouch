const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.resolve(__dirname, './public')));

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/graph', (req, res) => {
    res.render('graph');
})

app.listen(3000);