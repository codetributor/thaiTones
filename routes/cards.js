const express = require('express');
const router = express.Router();
const { data } = require('../data/flashCardData.json');

router.get('/', (req, res) => {
    const { all } = req.query
    const random1 = Math.floor(Math.random() * 15);
    const random2 = Math.floor(Math.random() * 5);
    let word;

    if(random1 === 0) {
        word = 'maa';
    } else if(random1 === 1) {
        word = 'yaa';
    } else if(random1 === 2) {
        word = 'sii';
    } else if(random1 == 3) {
        word = 'seuua';
    } else if(random1 === 4) {
        word = 'san';
    } else if(random1 === 5) {
        word = 'sai';
    } else if(random1 === 6) {
        word = 'rai';
    } else if(random1 === 7) {
        word = 'naa';
    } else if(random1 === 8) {
        word = 'mai';
    } else if(random1 === 9) {
        word = 'kaaw';
    } else if(random1 === 10) {
        word = 'glai'
    } else if(random1 === 11) {
        word = 'fan';
    } else if(random1 === 12) {
        word = 'dii';
    } else if(random1 === 13) {
        word = 'chin';
    } else if(random1 === 14) {
        word = 'baang';
    }
    res.redirect(`/cards/${word}?id=${random2}&all=true`)
});


router.get('/:word', (req, res) => {
    const name = req.cookies.username;
    const {answer} = req.query;
    const {word} = req.params;
    const { id } = req.query;
    const { all } = req.query
    
    if(!id) {
        const randomNumber = Math.floor(Math.random() * 5);
        return res.redirect(`/cards/${word}?id=${randomNumber}`)
    }

    const tone = data[word][id].tone
    const { title } = data[word][0]

    const templateData = { audioPath: data[word][id].audio, answer, id, tone, name, title, all}
    res.render('card', templateData)
});


module.exports = router;