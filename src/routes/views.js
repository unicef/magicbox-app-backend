const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const mongoUtil = require('../mongoUtil');

// GET FILE FUNCTIONS
function getFile(req, res) {
  const db = mongoUtil.getDb();
  let query = {};
  query.url = req.url;
  console.log(query)
  db.collection('config').findOne(query, function(err, result) {
       if (err) throw err;
       console.log(result);
       res.send(result);
  });
}
// GET FILE ROUTES
// index, currently not serving any database files
router.get('/', getFile);
// thematic country view
router.get('/:dataset/c/:country', getFile);
// thematic global view
router.get('/:dataset', getFile);
// user created map
router.get('/u/:user/:mapId', getFile);

// POST FILE FUNCTIONS
function postFile(req, res) {
    const db = mongoUtil.getDb();
    let newFile = {
                url: req.body.url,
                mapConfig: req.body.mapConfig,
                appConfig: req.body.appConfig,
            }
    console.log(req.body)
    console.log(newFile)
    db.collection('config').insertOne(req.body, function(err, result) {
        if (err) throw err;
        res.send(result);
    });
};
// POST FILE ROUTES
router.post('/create', postFile);

// UPDATE FILE FUNCTIONS
function updateFile(req, res) {
    let query = {};
    query.url = req.body.url;
    let newData = {
            $set: {
            mapConfig: req.body.mapConfig,
            appConfig: req.body.appConfig
          }
        }
    const db = mongoUtil.getDb();
    db.collection('config').updateOne(query, newData, function(err, result) {
        if (err) throw err;
        res.send(result);
  });
}

// UPDATE FILE ROUTES
router.post('/update', updateFile);

// // DELETE FILE FUNCTIONS
// function deleteFile(req, res) {
//     const db = mongoUtil.getDb();
//     let query = {};
//     query.url = req.url;
//     db.collection('config').deleteOne(query, function(err, obj) {
//         if (err) throw err;
//   });


module.exports = router;
