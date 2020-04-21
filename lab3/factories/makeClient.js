module.exports = ({ validator, errorHandler }) => ({
  fullName, age, city, phoneNumber,
} = {}) => {
  const clientValidator = validator.makeClientValidator();
  const error = clientValidator({
    fullName, age, city, phoneNumber,
  });
  if (error) {
    return errorHandler.getValidationError(error);
  }
  return {
    getFullName: () => fullName,
    getAge: () => age,
    getCity: () => city,
    getPhoneNumber: () => phoneNumber,
  };
};
