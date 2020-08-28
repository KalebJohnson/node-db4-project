
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
      tbl.increments();
      tbl.text('recipe_name', 25)
        .notNullable();
      
    })
    .createTable('ingredients', tbl => { 
       tbl.increments();
       tbl.text('ingredient_name', 128)
       .notNullable();
       tbl.integer('ingredient_id')
       .unsigned()
       .notNullable()
       .references('id')
       .inTable('recipes')
       .onUpdate('CASCADE')
       .onDelete('CASCADE');   
    }) 
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipes')
    .dropTableIfExists('ingredients')
};
