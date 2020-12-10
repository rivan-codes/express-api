var express = require('express');
var router = express.Router();

/* GET pegawai listing. */
router.get('/', function(req, res, next) {
  // console.log(req.query.get);
  console.log(app.use(express.urlencoded()));
  res.send('respond with a resource pegawai');
});

module.exports = router;
