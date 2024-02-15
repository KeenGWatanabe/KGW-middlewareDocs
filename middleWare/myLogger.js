// NEXT
const myLogger = function (req, res, next) {
   console.log('logged'); 
next()};

module.exports = myLogger;