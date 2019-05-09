const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const index = require('./routes/index');
const configs = require('./routes/configs');
const files = require('./routes/files');
const views = require('./routes/views');
const admin_boundaries = require('./routes/admin_boundaries');
const schools = require('./routes/schools');
const population_points = require('./routes/population_points');
const mongoUtil = require('./mongoUtil');


mongoUtil.connectToServer( function( err, client ) {
  if (err) console.log(err);
  console.log('connected!');
} );

const clearlist = ['http://localhost:8080']
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
app.use(cors(corsOptions));
app.use(bodyParser.json({ limit: '250mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '250mb', extended: true }));

app.use('/api', index);
app.use('/api/configs', configs);
app.use('/api/files', files);
app.use('/api/schools', schools);
app.use('/api/population-points', population_points);
app.use('/api/admin-boundaries', admin_boundaries);
app.use('/api/views', views);

app.listen(port, () => console.log(`Listening on port ${port}...`)); // eslint-disable-line
