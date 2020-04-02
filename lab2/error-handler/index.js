const { ObjectId } = require('mongoose').Types;

const getValidationError = (message) => {
  const error = new Error(message);
  error.code = 422;
  return error;
};

const checkIfIdIsValid = (id) => {
  if (!ObjectId.isValid(id)) {
    return getValidationError('invalid ID');
  }
  return true;
};

const getNotFoundError = (message) => {
  const error = new Error(message);
  error.code = 404;
  return error;
};

module.exports = () => ({
  getValidationError,
  getNotFoundError,
  checkIfIdIsValid,
});
