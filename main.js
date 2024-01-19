const express = require("express");
const path = require("path");
// const mongoose = require('mongoose');
const app = express();
const port = 8080;

app.use('/static',express.static('static'))

app.set('view engine', 'pug')

app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    res.status(200).render('student.pug');
})
app.get('/start', (req, res) => {
    res.status(200).render('start.pug');
})
app.get('/live', (req, res) => {
    res.status(200).render('live.pug');
})
app.get('/recorded', (req, res) => {
    res.status(200).render('recorded.pug');
})
app.get('/doubt', (req, res) => {
    res.status(200).render('doubt.pug');
})
app.get('/inbox', (req, res) => {
    res.status(200).render('inbox.pug');
})
app.get('/documents', (req, res) => {
    res.status(200).render('documents.pug');
})
app.get('/exit', (req, res) => {
    const myTimeout = setTimeout(myGreeting, 1000);

    function myGreeting() {
        res.status(200).render('exit.pug');
    }
    
})
app.get('/profile', (req, res) => {
    res.status(200).render('profile.pug');
})
// app.get('/recorded', (req, res) => {
//     res.status(200).render('recordedStudent.pug');
// })
// app.get('/teacher/set-lecture', (req, res) => {
//     res.status(200).render('setTeacher.pug');
// })

app.listen(port, () => {
    console.log(`The application started successfully on the port ${port}`)
})

module.exports = app;