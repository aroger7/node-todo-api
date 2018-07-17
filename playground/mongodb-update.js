const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db
  //   .collection('Todos')
  //   .findOneAndUpdate(
  //     { _id: new ObjectID('5b4e7b7bdf9106df93464c4f') },
  //     { $set: { completed: true } },
  //     { returnOriginal: false }
  //   )
  //   .then(result => {
  //     console.log(result);
  //   });
  db
    .collection('Users')
    .findOneAndUpdate(
      { name: 'Mike' },
      { $set: { name: 'Adam' }, $inc: { age: 1 } },
      { returnOriginal: false }
    )
    .then(result => {
      console.log(result);
    });

  //client.close();
});
