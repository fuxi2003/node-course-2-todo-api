const {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
    return console.log('Unable to connect to Mongodb server');
  }
    console.log('able to connect to Mongodb server');
    const db = client.db('TodoApp');
    // db.collection('TodoApp').findOneAndUpdate({
    //   _id:new ObjectID('5d258ab76a5ed9aa7eb467a')
    //   },{
    //     $set:{
    //      completed:false
    //     },
    //     $inc:{
    //       age: 1
    //       }
    //     }, {returnOriginal: false })
    //     .then((result => {
    //       console.log(result);
    //     });
   db.collection('users').findOneAndUpdate({
    _id:new ObjectID('5d232904d099bf62ef93db50')
    },{
      $set:{
        name:'Ilan'
      },
      $inc:{
        age: 1
        }
      }, {
        returnOriginal: false
      }).then((result => {
        console.log(result);
      }));

    client.close();
});
