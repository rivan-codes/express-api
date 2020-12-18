var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // console.log('users' + req.query.get);
  res.send('respond with a resource');
});

// app.get('/', (req, res) => {
//   console.log(req.query.get)
//   res.send('Hello World!')
// })

module.exports = router;