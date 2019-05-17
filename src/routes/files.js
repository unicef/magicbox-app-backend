const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const mongoUtil = require('../mongoUtil');

router.get('/', (req, res) => { // eslint-disable-line
    const db = mongoUtil.getDb();
    db.collection('config').findOne({url: '/'}, function(err, result) {
        if (err) throw err;
        res.send(result);
    });
});

router.get('/:dataset/c/:country/', (req, res) => { // eslint-disable-line
    const db = mongoUtil.getDb();
    let query = {};
    query.url = req.url;
    db.collection('config').findOne(query, function(err, result) {
        if (err) throw err;
        res.send(result);
    });
});

router.get('/:dataset', (req, res) => { // eslint-disable-line
    const db = mongoUtil.getDb();
    let query = {};
    query.url = req.url;
    db.collection('config').findOne(query, function(err, result) {
        if (err) throw err;
        res.send(result);
    });
});

router.get('/u/:user/', (req, res) => { // eslint-disable-line
    const db = mongoUtil.getDb();
    let query = {};
    query.url = req.url.slice(0, -1);
    db.collection('config').findOne(query, function(err, result) {
        if (err) throw err;
        res.send(result);
    });
});

module.exports = router;
