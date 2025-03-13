let person = {
    name: "Nhathat",
    age: 20,
    hometown: "HaiDuong",
    job: "student",
    single: true,
    hobbies: ["reading", "music", "game"],
    sayHi: function () {
        console.log("Hello, I'm " + this.name);
    },
};


delete person.single;