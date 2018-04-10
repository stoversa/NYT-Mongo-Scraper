var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var NoteSchema = new Schema({
  text: String
});

var Note = mongoose.model("Note", NoteSchema);


module.exports = Note; // Export the Note model