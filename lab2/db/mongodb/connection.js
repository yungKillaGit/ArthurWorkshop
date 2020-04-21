module.exports = ({ mongoose, config }) => {
  const { dbHost, dbPort, dbName } = config;
  const mongooseConnection = mongoose;
  mongooseConnection.Promise = global.Promise;
  mongooseConnection.connect(`mongodb://${dbHost}:${dbPort}/${dbName}`, {
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
