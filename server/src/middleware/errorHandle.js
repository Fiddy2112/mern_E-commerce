const notFound = (req, res, next) => {
  const err = new Error(`Route ${req.originalUrl} not found`);
  res.status(404);
  next(err);
};

const errHandle = (error, req, res, next) => {
  const status = res.statusCode === 200 ? 500 : res.statusCode;
  return res.status(status).json({
    success: false,
    message: error?.message,
  });
};

module.exports = { notFound, errHandle };
