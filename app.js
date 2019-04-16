const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const bodyParser = require('body-parser');
const index = require('./routes/index');
const configs = require('./routes/configs');
const shapefiles = require('./routes/shapefiles');
const schools = require('./routes/schools');
const population_points = require('./routes/population_points');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.json({ limit: '250mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '250mb', extended: true }))

app.use('/api', index);
app.use('/api/configs', configs);
app.use('/api/schools', schools);
app.use('/api/population_points', population_points);
app.use('/api/shapefiles', shapefiles);

// app.use('/api', router);

app.listen(port, () => console.log(`Listening on port ${port}...`))
