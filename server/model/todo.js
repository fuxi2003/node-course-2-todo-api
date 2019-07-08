var mongoose = require('mongoose');

var Todo = mongoose.model('Todo',{
  text:{
  type:String,
  required:true,
  minlength:1,
  trim:true
  },
  completed:{
  type:Boolean,
  default:false
    },
  completedAt:{
  type:Number,
  default:null
   },
   _creator: {
  type: Mongoose.Schema.type.ObjectId,
  required: true
   }
   });

// var otherTodo = new Todo({
//   text:'Feed the Cat',
//   completed:true,
//   completedAt: 123
//   })
//
//      otherTodo.save()
//            .then((doc)=> {
//            console.log(JSON.stringify(doc,undefined,2));
//            },(err)=> {
//             console.log('unable to save todo')
//           });
// var newTodo = new Todo({
//   text: ‘cook dinner’
//   });
// Todo.save()
//     .then((doc)=>{
//       console.log('save todo',doc)
//       },(err)=>{
//         console.log('unable to save todo')
//         });
module.exports = {Todo};
