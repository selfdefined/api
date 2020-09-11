'use strict';

const database = require('../src/database');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert('Languages', [
      {
        iso: 'en',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        iso: 'fr',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        iso: 'nl',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
    const languages = await database.models.Language.findAll();

    await queryInterface.bulkInsert('Countries', [
      {
        iso: 'us',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        iso: 'fr',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        iso: 'nl',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);

    const countries = await database.models.Country.findAll();

    const languageNamesToInsert = [
      {
        title: 'English'
      },
      {
        title: 'French'
      },
      {
        title: 'Dutch'
      }
    ];
    await queryInterface.bulkInsert(
      'LanguageNames',
      languages.map((language, i) => ({
        LanguageId: language.id,
        createdAt: new Date(),
        updatedAt: new Date(),
        ...languageNamesToInsert[i]
      }))
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Languages');
    await queryInterface.bulkDelete('Countries');
    await queryInterface.bulkDelete('LanguageNames');
  }
};
