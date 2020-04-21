const seeder = ({ mongoose, Service }) => ({
  seedDatabase: async () => {
    const service1 = {
      name: 'Услуга 1',
      description: 'Услуга 1 хороша',
      price: 1100,
    };
    const service2 = {
      name: 'Услуга 2',
      price: 2100,
      description: 'Услуга 2 хороша',
    };
    const service3 = {
      name: 'Услуга 3',
      price: 3100,
      description: 'Услуга 3 хороша',
    };

    await Service.create(service1);
    await Service.create(service2);
    await Service.create(service3);
  },
  seed: () => {
    // Drop DB then seed
    mongoose.connection.collections.services.drop(async () => {
      await seeder.seedDatabase();
    });
  },
});

module.exports = seeder;
