const errorHandler = ({ mongoose }) => ({
  getValidationError: (message) => {
    const error = new Error(message);
    error.code = 422;
    return error;
  },

  checkIfIdIsValid: (id) => {
    const { ObjectId } = mongoose.Types;
    if (!ObjectId.isValid(id)) {
      return errorHandler({ mongoose }).getValidationError('invalid ID');
    }
    return true;
  },

  getNotFoundError: (message) => {
    const error = new Error(message);
    error.code = 404;
    return error;
  },
});

module.exports = errorHandler;
