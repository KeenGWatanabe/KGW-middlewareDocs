// ROUTE THAT responds to GET requests to /user/:id path
app.get('/user/:id',(req,res,next) => {
  res.send('USER')
});

module.exports = httpRES;