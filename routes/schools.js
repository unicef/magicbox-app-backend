const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const fs = require('fs');

router.get('/', (req, res) => {
  const path = './public/sample-data/sample_colombia_schools.csv'
  let fileContent;
  return new Promise(function(resolve) {
    fileContent = fs.readFileSync(path, {encoding: 'utf8'});
      resolve(fileContent);
    })
    .then(result => res.send(result));
})

module.exports = router;
