const {Mongoclient,ObjectID} = require('mongodb');
Mongoclient.connection('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('Unable to connect to Mongodb server');
  }
    console.log('able to connect to Mongodb server');

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









  //db.close()
});
