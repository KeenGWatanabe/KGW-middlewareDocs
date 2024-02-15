//loading MW at mount point + mount path that prints info from HTTP request
app.use('/user/:id',(req,res,next) => {
  console.log('Request URL: ' + req.originalUrl);
  next();
  // httpREQ.js 
}, (req, res, next) => {
  console.log('Request Type: ' + req.method);
  next();
})