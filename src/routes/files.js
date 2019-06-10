const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const mongoUtil = require('../mongoUtil');

// When deploying to root '/'
router.get('/', (req, res) => { // eslint-disable-line
  getGlobalDataset(req, res);
});

router.get('/c/:country/', (req, res) => { // eslint-disable-line
  getCountryDataset(req, res);
});

// When deploying to subpath '/povertyradar', for instance
router.get('/:dataset', (req, res) => { // eslint-disable-line
  getGlobalDataset(req, res, req.url);
});

// When deploying to subpath '/povertyradar', for instance
router.get('/:dataset/c/:country/', (req, res) => { // eslint-disable-line
  getCountryDataset(req, res);
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

function getGlobalDataset(req, res, subpath) {
  const db = mongoUtil.getDb();
  let query = {};
  query.url = subpath ? req.url : process.env.PROJECT_THEME_URL;
  db.collection('config').findOne(query, function(err, result) {
    if (err) throw err;
    res.send(result);
  });
}

function getCountryDataset(req, res) {
  const db = mongoUtil.getDb();
  let query = {};
  query.url = req.url || process.env.PROJECT_THEME_URL;
  db.collection('config').findOne(query, function(err, result) {
    if (err) throw err;
    res.send(result);
  });
}
module.exports = router;
