'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      { id: 1, username: 'sylvester', password: 's@123', role: 'owner', email: 's@rmi.com', created_at: new Date(), updated_at: new Date()},
      { id: 2, username: 'admin', password: 'admin@rmi', role: 'admin', email: 'rmi@example.com', created_at: new Date(), updated_at: new Date()}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};


