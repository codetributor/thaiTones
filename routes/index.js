const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    const name = req.cookies.username;
    if(name) {
        res.render('index', { name });
    } else {
        res.redirect('/welcome')
    }
    
});

router.get('/welcome', (req, res) => {
    const name = req.cookies.username;
    if(name) {
        res.redirect('/');
    } else {
        res.render('welcome');
    }
})

router.post('/welcome', (req, res) => {
    res.cookie('username', req.body.username);
    res.redirect('/')
})

router.post('/goodbye', (req, res) => {
    const name = req.cookies.username;
    res.clearCookie('username')
    res.redirect('/');
})

module.exports = router;