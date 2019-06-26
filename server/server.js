const express = require('express');
const bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {user} = require('./models/user');

app.use = express();
app.use(bodyParser(json));

app.post('./todo',(req,res)=> {
  var todo = new Todo({
     text:req.body.text
     });
  todo.save()
       .then((doc)=> {
         res.send(doc);
       },(err)=>{
         res.status(400).send(err);
    });
  })
app.get('./todo',(req,res) => {
  Todo.find().then((todos)=> {
    res.send({todos});
    },(err)=> {
      res.status(400).send(err);
      })
  })
  app.listen(3000,()=>{
    console.log('started up on port 3000');
  });

  module.exports = {app};
// const mongoose = require('mongoose');
// mongoose.Promise = global.Promise;
// mongoose.connect("http://localhost:27017/TodoApp");
//
// var otherTodo = new Todo({
//   text:" feed cat",
//   completed: true,
//   complatedat:123
//   });
// Todo.save()
//     .then((doc)=> {
//       console.log(JSON.stringify(doc,undefined,2));
//       },(err)=> {
//         console.log('unable to save todo',err);
//         });
// //user
// //email --require it--trim it --  set type set minlength=1--
