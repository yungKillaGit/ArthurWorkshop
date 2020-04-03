module.exports = ({ mongooseConnection }) => {
  const { Schema } = mongooseConnection;
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
  return mongooseConnection.model('Request', RequestSchema);
};
