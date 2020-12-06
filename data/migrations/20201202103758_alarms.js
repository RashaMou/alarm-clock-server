exports.up = function (knex) {
    return knex.schema.createTable("alarms", (tbl) => {
        tbl.increments();
        tbl.string("name", 128);
        tbl.integer("hour");
        tbl.integer("minutes");
        tbl.string("amPm", 2);
        tbl.integer("mon").defaultTo(0);
        tbl.integer("tue").defaultTo(0);
        tbl.integer("wed").defaultTo(0);
        tbl.integer("thu").defaultTo(0);
        tbl.integer("fri").defaultTo(0);
        tbl.integer("sat").defaultTo(0);
        tbl.integer("sun").defaultTo(0);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("alarms");
};
