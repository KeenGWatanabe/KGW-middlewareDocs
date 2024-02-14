const express = require('express');
const app = express();

app.use(function(req, res, next) {
  console.log('Time: ' + new Date().toUTCString());  //return toUTCString();
  next();
});

app.listen(3000),()=>{
  console.log('listing on port' + port);
};