const app = ({
  config, router, express, bodyParser,
}) => ({
  start: () => {
    const server = express();
    server.use(bodyParser.urlencoded({ extended: true }));
    server.use(bodyParser.json());
    server.use(config.root, router);

    server.listen(config.port, () => {
      console.log('*********************************');
      console.log(`* App listening on port ${config.port}`);
      console.log('*********************************');
    });
  },
});

module.exports = app;
