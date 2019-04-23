const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const jsonfile = require('jsonfile');
const helper = require('../helpers/assemble-config')

// the view endpoint should be what controls the view that is compiled.
//  - First, it should return the view object containing id, domain/url, theme_id and data_id
//  - then, it should control, either directly or with a helper, the fetching of two key datasets
//      - the theme, an object that will contain the app/theme config
//      - the data, which contains the data that is displayed (or pointers to the data that is displayed)

router.get('/', (req, res) => { // eslint-disable-line
    const path = '../public/sample-data/sample_colombia_view.json';
    return new Promise(function(resolve) {
        jsonfile.readFile(path, (err, file) => {
            resolve(file);
        });
    })
        .then(result => helper.getData(result));
});

module.exports = router;
