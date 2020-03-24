const mongoose = require('mongoose');
const config = require('../../config')();

mongoose.Promise = global.Promise;
mongoose.connect(config.dbUri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

mongoose.connection.once('open', () => {
  console.log('Connection has been made');
}).on('error', (error) => {
  console.log('Connect error', error);
}).on('disconnected', () => {
  console.log('Connection disconnected');
});

module.exports = mongoose;
