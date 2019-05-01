const MongoClient = require( 'mongodb' ).MongoClient;
const url = "mongodb://localhost:27017";

const dbName = 'myproject';
let _db

module.exports = {

  connectToServer: function( callback ) {
    MongoClient.connect( url,  { useNewUrlParser: true }, function( err, client ) {
      _db  = client.db(dbName);
      return callback( err );
    } );
  },

  getDb: function() {
    return _db;
  }
};
