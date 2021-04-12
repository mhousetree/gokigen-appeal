const express = require('express');
const path = require('path')
const set_status_emoji = require('./set_status_emoji.js')
const app = express();
const PORT = process.env.PORT || 3000

app
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'pug')

app
    .get('/', (req, res) => {
        res.render('index', { title: 'GOKIGEN appeal for Slack' })
    })
    .get('/test', (req, res) => {
        res.render('test', { title: 'test page' })
    })
    .get('/GOKIGEN-level5', (req, res) => {
        const level = 5;
        const redirect_uri = "https://gokigen-appeal.herokuapp.com/GOKIGEN-level5";
        set_status_emoji(req, level, redirect_uri);
        res.render('result', { level: 5 })
    })
    .get('/GOKIGEN-level4', (req, res) => {
        const level = 4;
        const redirect_uri = "https://gokigen-appeal.herokuapp.com/GOKIGEN-level4";
        set_status_emoji(req, level, redirect_uri);
        res.render('result', { level: 4 })
    })
    .get('/GOKIGEN-level3', (req, res) => {
        const level = 3;
        const redirect_uri = "https://gokigen-appeal.herokuapp.com/GOKIGEN-level3";
        set_status_emoji(req, level, redirect_uri);
        res.render('result', { level: 3 })
    })
    .get('/GOKIGEN-level2', (req, res) => {
        const level = 2;
        const redirect_uri = "https://gokigen-appeal.herokuapp.com/GOKIGEN-level2";
        set_status_emoji(req, level, redirect_uri);
        res.render('result', { level: 2 })
    })
    .get('/GOKIGEN-level1', (req, res) => {
        const level = 1;
        const redirect_uri = "https://gokigen-appeal.herokuapp.com/GOKIGEN-level1";
        set_status_emoji(req, level, redirect_uri);
        res.render('result', { level: 1 })
    })

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
});