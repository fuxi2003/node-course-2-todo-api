const {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
    console.log('able to connect to MongoDB server');
    const db = client.db('TodoAPP');

 //});
   //delete  many
   //  db.collection('Todos').deleteMany({text:`eat Lunch`}).then((result => {
   //    console.log(result);
   //    }));

   //delete oNE
   // db.collection('Todos').deleteOne({text:`Eat Lunch`}).then((result => {
   //   console.log(result);
   //   }));

   //find one and delete
   db.collection('Todos').findOneAndDelete({completed:false}).then((result => {
      console.log(result);
     }));
    // db.collection('Users').deleteMany({name:"Ilan"});
   // db.collection('Users').findOneAndDelete({_id:New ObjectID("5d258bc676a5cd9aa7eb4b7b")}).
   // then((results)=>{
   //   console.log(JSON.stringify(results,undefined,2));
   //   });
   // client.close();
  });
