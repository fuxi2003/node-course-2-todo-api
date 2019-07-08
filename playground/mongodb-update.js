const {Mongoclient,ObjectID} = require('mongodb');
Mongoclient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
    return console.log('Unable to connect to Mongodb server');
  }
    console.log('able to connect to Mongodb server');
    const db = client.db('TodoApp');
    db.collection().findOneandUpdate({
      _id:new ObjectID'57bc4615b3b6a3801d8c47a2'
      },{
        $set:{
         completed:false
        },
        $inc:{
          age: 1
          }
        }, {returnOriginal: false })
        .then((result => {
          console.log(result);
        });
  db.collection('users').findOneandUpdate({
    _id:new ObjectID'57abbcf4fd13a094e481cf2c'
    },{
      $set:{
        name:'finalhandler'
      },
      $inc:{
        age: 1
        }
      }, {returnOriginal: false })
      .then((result => {
        console.log(result);
        });

    //db.close();
});
