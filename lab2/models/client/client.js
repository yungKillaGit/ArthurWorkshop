const errorHandler = require('../../error-handler')();

const buildMakeClient = (clientValidator) => ({
  fullName, age, city, phoneNumber,
} = {}) => {
  const error = clientValidator({
    fullName, age, city, phoneNumber,
  });
  if (error !== undefined) {
    return errorHandler.getValidationError(error);
  }
  return {
    getFullName: () => fullName,
    getAge: () => age,
    getCity: () => city,
    getPhoneNumber: () => phoneNumber,
  };
};

module.exports = buildMakeClient;
