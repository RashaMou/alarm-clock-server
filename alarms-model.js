const db = require("./data/db-config");

module.exports = {
    findAll,
    findById,
    remove,
    add,
};

function findAll() {
    return db("alarms");
}

function remove(id) {
    return db("alarms").where({ id }).del();
}

function findById(id) {
    return db("alarms").where({ id }).first();
}

async function add(alarm) {
    const [id] = await db("alarms").insert(alarm, "id");
    return findById(id);
}
