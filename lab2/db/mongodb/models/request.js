const mongoose = require('../connection');

const { Schema } = mongoose;
const RequestSchema = new Schema({
  client: {
    type: Schema.Types.ObjectId,
    ref: 'Client',
  },
  services: [{
    type: Schema.Types.ObjectId,
    ref: 'Service',
  }],
});

const Request = mongoose.model('Request', RequestSchema);

module.exports = Request;
