const {Mongoclient} = require('mongodb');
//var {name} = user;
//console.log(name);
Mongoclient.connect('mongodb://localhost:27017/TodoApp',function(err,client){
  if (err){
   return  console.log('Unnable to connect Mongodb server');
  }
    console.log('connect to Mongodb server');

       const db = client.db(TodoApp);
       client.colletion('Todos').insertOne({
         text:"something to do",
         completed:true
         },(err,result)=>{
           if(err){
            return  console.log('unable to insertOne',err);
           }
           console.log(JSON.stringify(result.ops, undefined,2));
           });
       client.close();

 });










 // Connect using the MongoClient.connect static method
 // const MongoClient = require('mongodb').MongoClient;
 // const test = require('assert');
 // // Connection url
 // const url = 'mongodb://localhost:27017';
 // // Database Name
 // const dbName = 'test';
 // // Connect using MongoClient
 // MongoClient.connect(url, function(err, client) {
 //   const db = client.db(dbName);
 //   client.close();
 // });
    // db.connection('Todos').insertOne({
    // _id:123
    //   text:'something to do',
    //   completed:false
    // },(err,result)=>{
      // if (err) {
        // return console.log('Unable to insert todo');
       //}
       //console.log(JSON.stringify(resultopt[]));
       //})
    // insert new docs into the Users(name,age,location)
    // db.connection('Users').insertOne({
    //   id :123
    //   name:'Ilan Moradi',
    //   age :'42',
    //   location:'Paris'
    //   },(err,result)=>{
    //     if (err){
    //       return console.log('Unable to insert Users',err);
    //     }
    //     console.log(result.ops[0].id);
    //     })
