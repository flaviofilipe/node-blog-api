
exports.seed = async knex => {
  // Deletes ALL existing entries
  await knex('articles').del()
  await knex('categories').del()
  await knex('categories').insert([
    { id: 1, name: 'category 01' },
    { id: 2, name: 'category 02' }
  ]);
};
