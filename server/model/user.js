var mongoose = require('mongoose');
var User = mongoose.model('User',{
  email:{
    type:String,
    required:true,
    trim:true,
    minlength: 1
  }
  });

module.exports = {user};
// var user = new User{
// email:'assacmoradi@gmail.com'
//
// };
// user.save()
//     .then((doc)=>{
//       console.log('able to save',doc);
//       },(err)=>{
//         console.log('unable to save user',err);
        //});
