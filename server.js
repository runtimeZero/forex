var express = require('express');

var app = express();

/****** Serving Static pages  *********/
app.use(express.static(__dirname + '/client'));

app.listen(3000,function(){
  console.log('Open up your browser and type in http://localhost:3000');
});
