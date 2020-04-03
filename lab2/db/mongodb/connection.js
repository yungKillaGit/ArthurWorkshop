module.exports = ({ mongoose, config }) => {
  const mongooseConnection = mongoose;
  mongooseConnection.Promise = global.Promise;
  mongooseConnection.connect(config.dbUri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  mongooseConnection.connection.once('open', () => {
    console.log('Connection has been made');
  }).on('error', (error) => {
    console.log('Connect error', error);
  }).on('disconnected', () => {
    console.log('Connection disconnected');
  });
  return mongooseConnection;
};
