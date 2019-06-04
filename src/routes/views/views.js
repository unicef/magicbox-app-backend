const mongoUtil = require('../../mongoUtil');

module.exports = {
  // GET FILE FUNCTIONS
  getFile(req, res) {
      const db = mongoUtil.getDb();
      let query = {};
      query.url = req.url;
      db.collection('config').findOne(query, function(err, result) {
          if (err) throw err;
          res.send(result);
      });
  },

  // POST FILE FUNCTIONS
  postFile(req, res) {
      const db = mongoUtil.getDb();
      db.collection('config').insertOne(req.body, function(err, result) {
          if (err) throw err;
          res.send(result);
      });
  },

  // UPDATE FILE FUNCTIONS
  updateFile(req, res) {
      let query = {};
      query.url = req.url;
      let newData = {
          $set: {
              mapConfig: req.body.mapConfig,
              appConfig: req.body.appConfig
          }
      };
      const db = mongoUtil.getDb();
      db.collection('config').updateOne(query, newData, function(err, result) {
          if (err) throw err;
          res.send(result);
      });
  },

  // DELETE FILE FUNCTIONS
  deleteFile(req, res) {
      const db = mongoUtil.getDb();
      let query = {};
      query.url = req.body.url;
      db.collection('config').deleteOne(query, function(err, result) {
          if (err) throw err;
          res.send(result);
      });
  }
}
