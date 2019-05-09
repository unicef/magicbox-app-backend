const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const mongoUtil = require('../mongoUtil');

router.get('/', (req, res) => { // eslint-disable-line
    const db = mongoUtil.getDb();
    db.collection('config').find({url: '/'}).toArray((err, items) => {
        res.send(items) // eslint-disable-line
    });
});

router.get('/c/:id', (req, res) => { // eslint-disable-line
    const db = mongoUtil.getDb();
    let countryPath = `/c/${req.params.id}`;
    db.collection('config').find({url: countryPath}).toArray((err, items) => {
        res.send(items) // eslint-disable-line
    });
});


module.exports = router;
