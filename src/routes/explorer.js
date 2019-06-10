const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();


router.get('/', (req, res) => {
  getTree().then(tree => {
    res.send(tree);
  });
});

function getTree() {
  return new Promise((resolve, reject) => {
    require('readdir')
      .read('./public/sample-data', (err, allFiles) => {
        const targetFiles = allFiles.filter(e => {
          return e != '.DS_Store';
        });
        const tree = targetFiles.reduce((h, e) => {
          let iso = e.match(/([a-z]{3})(\.[a-z]+$)/i)[1];
          let kind = e.match(/(.+)(\/)/)[1];

          if (h[iso]) {
            h[iso].push(kind);
          } else {
            h[iso] = [kind];
          }
          return h;
        }, {});
        console.log('_____')
        console.log(err);
        resolve(tree);
      });
  });
}

module.exports = router;
