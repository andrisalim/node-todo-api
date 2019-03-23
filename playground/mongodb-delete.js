const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017',{ useNewUrlParser: true }, (err, client) => {
  var db = client.db('TodoApp');
  if (err) { return console.log('Unable to connect to MongoDB server'); }

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result)
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // }); 

  db.collection('Users').deleteMany({name: 'Andri'});

  db.collection('Users').deleteOne({_id: new ObjectID('5c84fc67cee31d7ba96b81b4')});

  console.log('Connected to MongoDB server');

  // client.close();
});