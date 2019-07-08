const{ObjectID} = require('mongodb');
const{mongoose} = require('./../server/db/mongoose');
const{Todo} = require('./../server/model/todo');

var id = '57bf38394b39c93d2a55e9811';

if(!ObjectID is valid(id)){
  console.log('ID not valid');
}
Todo.find({
  _id:id,
  }).then((todos)=> {
    console.log('Todos',todos);
    });
Todo.findone({
  _id:id,
  }).then((todo)=> {
    console.log('Todo',todo);
    });
Todo.findById(id).then((todo)=> {
  if(! todo) {
    return console.log('Id')
  }
  })
