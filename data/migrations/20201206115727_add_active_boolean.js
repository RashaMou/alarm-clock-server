exports.up = function (knex) {
    return knex.schema.table("alarms", (tbl) => {
        tbl.integer("active").defaultTo(1);
    });
};

exports.down = function (knex) {
    return knex.schema.dropColumn("active");
};
