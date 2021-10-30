const faker = require('faker')

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('articles').del()
    .then(function () {
      // Inserts seed entries
      return knex('articles').insert([
        {
          id: 1,
          title: faker.lorem.words(10),
          sumary: faker.lorem.words(10),
          firstParagraph: faker.lorem.words(20),
          body: faker.lorem.paragraph(),
          category_id: 1
        },
        {
          id: 2,
          title: faker.lorem.words(10),
          sumary: faker.lorem.words(10),
          firstParagraph: faker.lorem.words(20),
          body: faker.lorem.paragraph(),
          category_id: 2
        }
      ]);
    });
};
