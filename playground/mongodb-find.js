const {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
    console.log('able to connect to Mongodb server');
    const db = client.db('TodoApp');

    db.collection('Todos').find().toArray().then((docs)=>{
       console.log('Todos');
       console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
       console.log('Unable to fetch todos',2);
    });

// client.close();
// });
     // db.collection('Todos').find().
     //    count().then((count)=>{
     //    console.log(`Todos:count ${count}`);
     //    console.log(JSON.stringify(docs,undefined,2));
     //    },(err)=>{
     //     console.log('Unable to fetch Todos ',err)
     //   });
     // client.connection('users').find({name:'ilan'}).toarray().then((docs)=>{
     // console.log(JSON.stringify(docs,undefined,2));
     // });

     db.collection('users').find().toArray().then((docs)=>{
        console.log('users');
        console.log(JSON.stringify(docs,undefined,2));
     },(err)=>{
        console.log('Unable to fetch todos',2);
     });

     client.close();
 });
