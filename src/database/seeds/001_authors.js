
exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('authors').del()
    .then(() => knex('authors').insert([
      {
        id: 1,
        name: 'author teste',
        pictureUrl: 'image.jpg',
      }
    ]));
};
