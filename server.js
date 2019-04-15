const express    = require('express');
const app        = express();
const bodyParser = require('body-parser');

import routes from './routes';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 8080;
const router = express.Router();

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

// REGISTER ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', routes.index);
app.use('/api/configs', routes.config);
app.use('/api/population_points', routes.population_point);
app.use('/api/schools', routes.school);
app.use('/api/shapes', routes.shape);

app.listen(port);
console.log('Magic happens on port ' + port);
