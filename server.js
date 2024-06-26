const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render('index');
})


app.listen(3000, () => {
    console.log('listening on 3000');
});
