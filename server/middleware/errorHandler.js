const errorHandler = (err, req, res, next) => {
  if (err) {
    console.log('Error =>', err.message);
  } else next();
};

const notFoundHandler = (req, res) => {
  console.log(`Not found => ${req.originalUrl}`);
  res.status(404).send('Route xyz not found');
};

module.exports = { errorHandler, notFoundHandler };
