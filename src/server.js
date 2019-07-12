require('dotenv').config()
const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
const myEnv = dotenv.config();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const index = require('./routes/index');
const files = require('./routes/files');
const views = require('./routes/views');
const mongoUtil = require('./mongoUtil');
const public_url = process.env.PUBLIC_URL

mongoUtil.connectToServer( function( err, client ) {
  if (err) console.log(err);
  console.log('connected!');
} );

const clearlist = ['http://localhost:8080', 'http://192.168.99.100', 'https://magicbox.unicef.io']
const corsOptions = {
  origin: function (origin, callback) {
    if (clearlist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
// Then pass them to cors:
// app.use(cors(corsOptions));
app.use(bodyParser.json({ limit: '250mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '250mb', extended: true }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(public_url, index);
// app.use(`${public_url}/api/configs`, configs);
app.use(`${public_url}/files`, files);
// app.use(`${public_url}/schools`, schools);
// app.use(`${public_url}/population-points`, population_points);
// app.use(`${public_url}/admin-boundaries`, admin_boundaries);
app.use(`${public_url}/views`, views);

app.listen(port, () => console.log(`Listening on port ${port}...`)); // eslint-disable-line
