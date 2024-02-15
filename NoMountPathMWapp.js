const express = require('express');
const app = express();
// middleware with no mount path, function executed everytime app receives a request
app.use((req, res, next)=> {
  console.log('Time: ' + new Date().toUTCString());  //
  next();
});

app.listen(3000),()=>{
  console.log('listing on port' + port);
};