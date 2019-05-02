const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const mongoUtil = require('../mongoUtil');

router.get('/', (req, res) => { // eslint-disable-line
    const db = mongoUtil.getDb();
    db.collection('view').find({domain: '/c/colombia/school-mapping'}).toArray((err, items) => {
        res.send(items) // eslint-disable-line
    });
});

module.exports = router;
