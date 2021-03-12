const mongoose = require('mongoose');

var User = mongoose.model("User",{
  firstName:{type:String},
  lastName: {type:String},
  email:{type:String},
  phoneNumber:{type:Number},
  // imageName:{type:String}
});

module.exports = {User};
