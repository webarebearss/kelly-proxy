
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('images', function(table) {
      table.increments('imgId').primary();
      table.string('imgUrl');
      table.integer('listingId');
      table.integer('imgOrder');
      table.string('description');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('images')
  ])
};
