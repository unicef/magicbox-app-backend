const MongoClient = require( 'mongodb' ).MongoClient;
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
