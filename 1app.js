const express = require('express');
const app = express();
const myLogger = require('./middleware/myLogger');
const requestTime = require('./middleWare/requestTime');
//middleware 

app.use(myLogger);
app.use(requestTime);
app.get('/', (req, res) => {
  let responseText = 'Hello World!<br>'
  responseText += `<small>requested at: ${req.requestTime}</small>`;
  res.send(responseText);
});

app.listen(3000), () => {
  console.log('Example app listening on port 3000!');
};