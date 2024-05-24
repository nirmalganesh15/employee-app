var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('You are in Employee App Version 1.0.0 - Priyanka I love you ########');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});