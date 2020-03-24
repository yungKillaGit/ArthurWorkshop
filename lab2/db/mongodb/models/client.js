const mongoose = require('../connection');

const { Schema } = mongoose;
const ClientSchema = new Schema({
  fullName: String,
  age: Number,
  city: String,
  phoneNumber: String,
});

const Client = mongoose.model('Client', ClientSchema);

module.exports = Client;
