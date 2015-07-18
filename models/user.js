// require mongoose
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

//require bcrypt and salt later for authentication purposes

// define schemas

var UserSchema = new Schema ({
  firstname: String,
  lasname: String,
  profile_picture: String,
  email: String,
  passwordDigest: String
});

// Create and export user model
var User = mongoose.model('User', UserSchema);
module.exports = User;
