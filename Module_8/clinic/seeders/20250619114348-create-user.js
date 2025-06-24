'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash('password123', 10);

    const users = [
      {
        id: 1,
        username: 'admin1',
        email: 'admin1@example.com',
        password: hashedPassword,
        role: 'admin',
        is_deleted: false,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 2,
        username: 'doctor1',
        email: 'doctor1@example.com',
        password: hashedPassword,
        role: 'doctor',
        is_deleted: false,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 3,
        username: 'staff1',
        email: 'staff1@example.com',
        password: hashedPassword,
        role: 'staff',
        is_deleted: false,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 4,
        username: 'staff2',
        email: 'staff2@example.com',
        password: hashedPassword,
        role: 'staff',
        is_deleted: false,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 5,
        username: 'doctor2',
        email: 'doctor2@example.com',
        password: hashedPassword,
        role: 'doctor',
        is_deleted: false,
        created_at: new Date(),
        updated_at: new Date()
      },
    ];

    await queryInterface.bulkInsert('Users', users);

    const doctors = [
      {
        name: 'Dr. John Smith',
        specialty: 'Cardiology',
        user_id: 2,
        is_deleted: false,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Dr. Alice Brown',
        specialty: 'Neurology',
        user_id: 5,
        is_deleted: false,
        created_at: new Date(),
        updated_at: new Date()
      }
    ];

    await queryInterface.bulkInsert('Doctors', doctors);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Doctors', null, {});
    await queryInterface.bulkDelete('Users', null, {});
  }
};
