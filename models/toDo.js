const mongoose = require("mongoose");

const toDoSchema = new mongoose.Schema({
//   user: {type: mongoose.Schema.ObjectId, ref: "User"},
  username: {type: String},
  toDo: {type: String, required: true},
  date: {type: Date, default: Date.now}
})

const ToDo = mongoose.model("ToDo", toDoSchema);

exports.ToDo = ToDo;