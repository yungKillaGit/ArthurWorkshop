const mongoose = require('../connection');

const { Schema } = mongoose;
const ServiceSchema = new Schema({
  name: String,
  price: Number,
  description: String,
});

const Service = mongoose.model('Service', ServiceSchema);

module.exports = Service;
