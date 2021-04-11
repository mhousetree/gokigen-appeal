// https://slack.com/oauth/authorize?client_id=1963486779136.1939901061763&scope=identify&redirect_uri=http://localhost:3000/

const request = require('request')
const express = require('express');
const path = require('path')
const app = express();
const PORT = process.env.PORT || 3000

const slack_client_id = process.env.SLACK_CLIENT_ID;
const slack_client_secret = process.env.SLACK_CLIENT_SECRET;

app
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'pug')


app
    .get('/', (req, res) => {
        res.render('index', { title: 'gokigen-appeal' })
    })
    .get('/test', (req, res) => {
        res.render('test', { title: 'test page' })
    })

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
});