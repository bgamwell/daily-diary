// require mongoose
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var LogSchema = new Schema ({
  diary_entry: String,
  date: String, // will be automatically generated
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

// Create and export diary entry model
var Log = mongoose.model('Log', LogSchema);
module.exports = Log;
