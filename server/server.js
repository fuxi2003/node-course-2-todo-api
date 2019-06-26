
const express = require('express');
const bodyParser = require('body-parser');

var {ObjectID} = require('mongodb');
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./model/todo');
var {User} = require('./model/user');

var app = express();
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
      });
  })


//GET/ todos
app.get('./todo:id',(req,res) => {
    var id = req.params.id;
    if(!ObjectID = isvalid(id)){
      return res.status(400).send(id);

    };
    Todo.findById(id).then((todo)=>{
      if(!todo){
        return res.status(404).send();
      }
       res.send({todo});
      }).catch((e)=>{
      res.status(404).send();
      })
    //valid id using isvalid
    //404 send back empty body
    //findById
    //Success
    //if todo send back
    //if no todo sendback empty body

    //error  404

  });



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
// otherTodo.save()
//     .then((doc)=> {
//       console.log(JSON.stringify(doc,undefined,2));
//       },(err)=> {
//         console.log('unable to save todo',err);
//         });
// //user
// //email --require it--trim it --  set type set minlength=1--
