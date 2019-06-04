const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const views = require('./views');

// GET FILE ROUTES
// index, currently not serving any database files
router.get('/', views.getFile);
// thematic country views
router.get('/:dataset/c/:country', views.getFile);
// thematic global views
router.get('/:dataset', views.getFile);
// user created map
router.get('/u/:user/:mapId', views.getFile);

// POST FILE ROUTES
router.post('/create', views.postFile);

// UPDATE FILE ROUTES
router.post('/update', views.updateFile);

// DELETE FILE ROUTES
router.delete('/delete', views.deleteFile);


module.exports = router;
