const mongoose = require('mongoose');


//using mongodb atlas
mongoose.connect('mongodb+srv://sud_admin:sudAdmin@cluster0.eivnk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', (err)=>{
  if(err){
    console.log(err);
  }else{
    console.log('DB Connected');
  }
})

module.exports = mongoose;
