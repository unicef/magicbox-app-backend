const MongoClient = require( 'mongodb' ).MongoClient;

// Need to replace this method of mongo login
// to avoid credentials printing out in server logs
const url = `mongodb://${process.env.MONGOUSER}:${process.env.MONGOPASSWORD}@${process.env.MONGO_IP}:27017`;
const dbName = 'myproject';
let _db;
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
