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

// this matches with data.datasetName + data.path from the frontend
router.get('/:dataset/c/:country/', (req, res) => { // eslint-disable-line
    const db = mongoUtil.getDb();
    let query = {};
    query.url = req.url;
    db.collection('config').findOne(query, function(err, result) {
        if (err) throw err;
        res.send(result);
    });
});

// this matches with data.datasetName from the frontend
router.get('/:dataset', (req, res) => { // eslint-disable-line
    const db = mongoUtil.getDb();
    let query = {};
    query.url = req.url;
    db.collection('config').findOne(query, function(err, result) {
        if (err) throw err;
        res.send(result);
    });
});

// this matches with data.path from the frontend (when data.datasetName is null or '')
router.get('/u/:user/', (req, res) => { // eslint-disable-line
    const db = mongoUtil.getDb();
    let query = {};
    query.url = req.url;
    db.collection('config').findOne(query, function(err, result) {
        if (err) throw err;
        res.send(result);
    });
});

module.exports = router;
