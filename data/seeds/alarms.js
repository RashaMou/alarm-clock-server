exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("alarms")
        .del()
        .then(function () {
            // Inserts seed entries
            return knex("alarms").insert([
                {
                    id: 1,
                    name: "morning",
                    hour: 3,
                    minutes: 30,
                    amPm: "am",
                    mon: 0,
                    tue: 0,
                    wed: 0,
                    thu: 0,
                    fri: 0,
                    sat: 0,
                    sun: 0,
                },
                {
                    id: 2,
                    name: "work",
                    hour: 7,
                    minutes: 30,
                    amPm: "pm",
                    mon: 0,
                    tue: 0,
                    wed: 1,
                    thu: 0,
                    fri: 1,
                    sat: 0,
                    sun: 0,
                },
            ]);
        });
};
