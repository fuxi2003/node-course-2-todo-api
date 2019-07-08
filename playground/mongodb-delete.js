const {Mongoclient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
    console.log('able to connect to MongoDB server');
    const db = client.db('TodoAPP');

   //delete  many
    db.collection('Todos').deleteMany({text:`Eat Lunch`}).then((result => {
      console.log(result);
      });
   //delete oNE
   db.collection('Todos').deleteOne({text:`Eat Lunch`}).then((result => {
     console.log(result);
     });

   //find one and delete
   db.collection('Todos').findOneandDelete({completed:false}).then((result => {
     console.log(result);
     });
  client.close();
});








  //db.close()
});
