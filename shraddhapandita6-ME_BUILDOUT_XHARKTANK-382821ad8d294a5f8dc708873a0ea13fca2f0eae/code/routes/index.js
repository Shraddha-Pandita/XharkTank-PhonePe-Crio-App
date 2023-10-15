var express = require('express');
var router = express.Router({mergeParams: true});

const getPitch = require("../controllers/getPitch");
const getPitchById = require("../controllers/getPitchById");
const createPitch = require("../controllers/createPitch");
const makeOffer = require("../controllers/makeOffer");


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {title: 'Express'});
});

router.get('/pitches', getPitch);
router.post('/pitches', createPitch);

router.get('/pitches/:id', getPitchById);
router.post('/pitches/:id/makeOffer', makeOffer);


module.exports = router;
