const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/', (req, res) => { return res.send('hello world from index!'); });

module.exports = router;
