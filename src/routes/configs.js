const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const jsonfile = require('jsonfile');

router.get('/', (req, res) => {
    const path = './public/sample-data/sample_colombia_config.json';
    return new Promise(function(resolve) {
        jsonfile.readFile(path, (err, file) => {
            resolve(file);
        });
    })
        .then(result => res.send(result));
});

module.exports = router;
