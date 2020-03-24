module.exports = (client) => ({
  id: client._id,
  fullName: client.fullName,
  age: client.age,
  city: client.city,
  phoneNumber: client.phoneNumber,
});
