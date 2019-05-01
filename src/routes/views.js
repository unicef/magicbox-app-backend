const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const mongoUtil = require('../mongoUtil');

router.get('/', (req, res) => { // eslint-disable-line
    const db = mongoUtil.getDb();
    db.collection('view').find().toArray((err, items) => {
        console.log(items)
  })
});

module.exports = router;
