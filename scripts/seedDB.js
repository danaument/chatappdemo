const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect("mongodb://localhost/chatappdemo");

const chatSeed = [
  {
    date: new Date("1985-10-26T09:00:00Z"),
    user: "Doc",
    type: "enter",
  },
  {
    date: new Date("1985-10-26T09:01:00Z"),
    user: "Doc",
    type: "comment",
    message: "loves plutonium",
  },
  {
    date: new Date("1985-10-26T09:02:00Z"),
    user: "Marty",
    type: "highfive",
    otheruser: "Doc",
  },
  {
    date: new Date("1985-10-26T09:03:00Z"),
    user: "Doc",
    type: "leave",
  },
];

db.Event
  .remove({})
  .then(() => db.Event.collection.insertMany(chatSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
