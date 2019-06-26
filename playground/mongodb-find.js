const {Mongoclient,ObjectID} = require('mongodb');
Mongoclient.connection('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('Unable to connect to Mongodb server');
  }
    console.log('able to connect to Mongodb server');

     db.collection('Todos').find({
       _id: newObjectID '57bf38394b39c93d2a55e9811'
       }).count()
       .then((count)=>{
       console.log(`Todos:count ${count}`);
       console.log(JSON.stringify(docs,undefined,2));
       },(err)=>{
        console.log('Unable to fetch Todos ',err)
      });
    db.connection('users').find({name:'ilan'}).toarray().then((docs)=>{
    console.log(JSON.stringify(docs,undefined,2));
    });
    //db.close();
});
