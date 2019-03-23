const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017',{ useNewUrlParser: true }, (err, client) => {
  var db = client.db('TodoApp');
  if (err) { return console.log('Unable to connect to MongoDB server'); }
  console.log('Connected to MongoDB server');


  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5c95f51db81eeb95d7cb170e')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // })
  // .then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5c84fc3f0f617b7ba4088a47')
  }, {
    $set: {
      name: 'Andri S'
    },
    $inc: {
      age: 2
    }
  }, {
    returnOriginal: false
  })
  .then((result) => {
    console.log(result);
  });


  // client.close();
});