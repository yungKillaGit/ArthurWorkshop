module.exports = ({ mongooseConnection }) => {
  const { Schema } = mongooseConnection;
  const ClientSchema = new Schema({
    fullName: String,
    age: Number,
    city: String,
    phoneNumber: String,
  });
  return mongooseConnection.model('Client', ClientSchema);
};
