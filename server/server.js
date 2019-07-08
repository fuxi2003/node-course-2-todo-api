require('./config/config');
const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');

var {ObjectID} = require('mongodb');
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./model/todo');
var {User} = require('./model/user');
var {authenticate} =require('./middleware/authenticate');
var app = express();
const port = process.env.PORT ||3000;
app.use(bodyParser(json));

app.post('./todo',authenticate,(req,res)=> {
  var todo = new Todo({
     text:req.body.text,
     _creator: req.user._id
     });

  todo.save()
       .then((doc)=> {
         res.send(doc);
       },(err)=>{
         res.status(400).send(err);
    });
  });

app.get('./todo',authenticate,(req,res) => {
  Todo.find({_creator: req.user._id})
      .then((todos)=> {
    res.send({todos});
    },(err)=> {
      res.status(400).send(err);
      });
  });


//GET/ todos
app.get('./todo:id',(req,res) => {
    var id = req.params.id;
    if(!ObjectID.isvalid(id)){
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
  });
    //valid id using isvalid
    //404 send back empty body
    //findById
    //Success
    //if todo send back
    //if no todo sendback empty body

    //error  404

  app.delete('./todo:id',(req,res) => {
      var id = req.params.id;
      if(!ObjectID.isvalid(id)){
        return res.status(400).send(id);

      };
      Todo.findByIdAndDelete(id).then((todo)=>{
        if(!todo){
          return res.status(404).send();
        }
         res.send({todo});
        }).catch((e)=>{
        res.status(404).send();
        })
    });

app.patch('/todos/:id',(req,res)=> {
  var id = req.params.id;
  var body = _.pick(req.body,['text','completed']);
  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }

  if(_.isBoolean(body.completed)&&body.completed){
    body.completedAt = new Date().getTime();
  }else{
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id,{$Set:body},{new:true}).then((todo)=>{
    if(!todo){
      return res.status(404).send();
    }
    res.send({todo});
    }).catch((e)=> {
      res.status(400).send();
      })
  });
//Post /User
app.post('/user',(req,res)=> {
    var body = _.pick(req.body,['email','password']);
    var user = new User(body);

    User.save().then(()=>{
      return user.generateAuthToken();
      }).then((token)=>{
        res.header('x-auth',token).send(user);
        }).catch((err)=> {
        res.status(400).send(err);
        })
    });

app.get('/user/me',authenticate,(req,res)=>{
    res.send(req.user);
  });
//Post /users/login {email,PASSWORD}
app.post('/users/login',(req,res)=>{
    var body = _.pick(req.body,['email','password']);
    return user.generateAuthToken().then((token)=>{
        res.header('x-auth',token).send(user);
    }).catch((err)=>{
        res.status(400).send();
    });
});

app.delete('/users/me/token',authenticate,(req,res)=> {
    req.user.removeToken(req.token).then(()=>{
      res.status(200).send();
      },()=>{
        res.status(400).send();
        });
  });

app.listen(port,()=>{
    console.log(`Started up on ${port} `);
  });

module.exports = {app};
