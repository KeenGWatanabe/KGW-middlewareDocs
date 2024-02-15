// middleware function mounted on /user/:id path, function executed on any type of HTTP request on /user/:id path

// REQ
app.use('/user/:id', (req, res, next) => {
  console.log('Request Type:', req.method);
  next();
})

module.exports = httpREQ;