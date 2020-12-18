
exports.up = function(knex) {
    return knex.schema
    .createTable('users', function (table) {
        table.increments('id');
        table.string('first_name', 255).notNullable();
        table.string('last_name', 255).notNullable();
        table.string('email').unique().notNullable();
        table.string('password').unique().notNullable();
    })
    .createTable('posts', function (table) {
        table.increments('id');
        table.string('title', 255).notNullable();
        table.text('body').notNullable();

        table.integer('users_id').unsigned();
        table.foreign('users_id').references('users.id');
    })
    .createTable('comments', function (table) {
        table.increments('id');
        table.text('body').notNullable();

        table.integer('users_id').unsigned();
        table.foreign('users_id').references('users.id');

        table.integer('posts_id').unsigned();
        table.foreign('posts_id').references('posts.id');
    });
};

exports.down = function(knex) {
    return knex.schema
    .dropTable("comments")
    .dropTable("posts")
    .dropTable("users");
};
