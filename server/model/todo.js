var mongoose = require('mongoose');

var todo = mongoose.model('Todo',{
  text:{
  type:String,
  required:true,
  minlength:1,
  trim:true
  },
  completed:{
  type:Boolean
  default:false
    },
  completedat:{
  type:Number,
  default:null
   }
   });
module.exports = {todo};
// var newTodo = new Todo({
//   text:"cook dinner"
//   });
// Todo.save()
//     .then((doc)=>{
//       console.log('save todo',doc)
//       },(err)=>{
//         console.log('unable to save todo')
//         });
