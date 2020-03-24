const buildMakeClient = (clientValidator) => ({
  fullName, age, city, phoneNumber,
} = {}) => {
  const error = clientValidator({
    fullName, age, city, phoneNumber,
  });
  if (error !== undefined) {
    throw new Error(error);
  }
  return {
    getFullName: () => fullName,
    getAge: () => age,
    getCity: () => city,
    getPhoneNumber: () => phoneNumber,
  };
};

module.exports = buildMakeClient;
