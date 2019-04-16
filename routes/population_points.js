const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
// const blobFetcher = require('../azure/blob-fetcher');
// const helperShapefileCountry = require('../helpers/helper-shapefile-country')
// const helperShapefile = require('../helpers/helper-shapefile')

router.get('/:countryCode', (req, res) => {
  return res.send('hello world from pop points one country!');
})

module.exports = router;
