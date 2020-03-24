module.exports = (service) => ({
  id: service._id,
  name: service.name,
  price: service.price,
  description: service.description,
});
