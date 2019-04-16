const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const index = require('./routes/index');
const configs = require('./routes/configs');
const admin_boundaries = require('./routes/admin_boundaries');
const schools = require('./routes/schools');
const population_points = require('./routes/population_points');

app.use(bodyParser.json({ limit: '250mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '250mb', extended: true }));

app.use('/api', index);
app.use('/api/configs', configs);
app.use('/api/schools', schools);
app.use('/api/population-points', population_points);
app.use('/api/admin_boundaries', admin_boundaries);

app.listen(port, () => console.log(`Listening on port ${port}...`)); // eslint-disable-line