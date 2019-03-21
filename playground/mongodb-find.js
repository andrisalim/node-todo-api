const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017',{ useNewUrlParser: true }, (err, client) => {
// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  var db = client.db('TodoApp');
  if (err) { return console.log('Unable to connect to MongoDB server'); }



  console.log('Connected to MongoDB server');
  // // db.collection('Todos').find().toArray().then((docs) => {
  // // db.collection('Todos').find({completed: false}).toArray().then((docs) => {
  // // db.collection('Todos').find({_id: new ObjectID('5c84dba525e6837b220a58f4')}).toArray().then((docs) => {
  // db.collection('Todos').find().count().then((count) => {
  //   // console.log(`Todos: ${JSON.stringify(docs,undefined,2)}`);
  //   // console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('unable to fetch todos', err);
  // });

  db.collection('Users').find({
    name: 'Andri'
  }).toArray().then((result) => {
    console.log(`Users: ${JSON.stringify(result, undefined,2)}`);
  }, (err) => {
    console.log('unable to fetch Users', err);
  });


  // client.close();
});