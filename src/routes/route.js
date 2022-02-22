let obj = require('./logger')
const express = require('express');

const router = express.Router();


router.get('/test-me', function (req, res) {
    obj.printMyMessage('thorium')
    console.log(obj.url)
    res.send('My first ever api!')
});

module.exports = router;
// adding this comment for no reason