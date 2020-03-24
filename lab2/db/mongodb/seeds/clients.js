const mongoose = require('mongoose');
const Client = require('../models/client');

// Seeder using async await
const seedDatabase = async function () {
  const artur = {
    fullName: 'Исхаков А.С',
    age: 20,
    city: 'Тюмень',
    phoneNumber: '89827890203',
  };
  const ivan = {
    fullName: 'Ядушкин И.К',
    age: 19,
    city: 'Москва',
    phoneNumber: '89504808460',
  };
  const ksenia = {
    fullName: 'Головешкина К.И',
    age: 23,
    city: 'Тюмень',
    phoneNumber: '84950266620',
  };

  await Client.create(artur);
  await Client.create(ivan);
  await Client.create(ksenia);
};

const seeder = {
  seed: () => {
    // Drop DB then seed
    mongoose.connection.collections.clients.drop(async () => {
      await seedDatabase();
    });
  },
};

module.exports = seeder;
