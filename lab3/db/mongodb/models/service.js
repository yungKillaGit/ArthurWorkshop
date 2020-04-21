module.exports = ({ mongooseConnection }) => {
  const { Schema } = mongooseConnection;
  const ServiceSchema = new Schema({
    name: String,
    price: Number,
    description: String,
  });
  return mongooseConnection.model('Service', ServiceSchema);
};
