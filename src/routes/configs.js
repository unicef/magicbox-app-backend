const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/', (req, res) => { return res.send('hello world from configs global!'); });
router.get('/:countryCode', (req, res) => { return res.send('hello world from configs one country!'); });

module.exports = router;
