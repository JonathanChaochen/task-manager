// CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb');

// Connection URL
const connectionUrl = 'mongodb://127.0.0.1:27017';

// Database Name
const dbName = 'task-manager';

// Use connect method to connect to the server
MongoClient.connect(connectionUrl, { useUnifiedTopology: true }, function (
  error,
  client
) {
  if (error) {
    return console.log('unable to connect to database');
  }
  console.log('Connected successfully to server');

  const db = client.db(dbName);
  // db.collection('users')
  //   .find({ age: 29 })
  //   .toArray((error, users) => {
  //     if (error) {
  //       return console.log('unable to find users');
  //     }
  //     console.log(users);
  //   });

  // db.collection('users')
  //   .find({ age: 29 })
  //   .count((error, count) => {
  //     if (error) {
  //       return console.log('unable to find count of users');
  //     }
  //     console.log(count);
  //   });

  db.collection('tasks').findOne(
    { _id: new ObjectID('5eb4990a0b215428dbfbe87b') },
    (error, task) => {
      console.log('task:', task);
    }
  );

  db.collection('tasks')
    .find({ completed: false })
    .toArray((error, tasks) => {
      if (error) {
        return console.log('unable to find count of users');
      }
      console.log('1',tasks);
    });

  // db.collection('users').insertOne(
  //   {
  //     _id: id,
  //     name: 'Vector',
  //     age: 29,
  //   },
  //   (error, result) => {
  //     if (error) {
  //       return console.log('Unable to insert user');
  //     }

  //     console.log(result.ops);
  //   }
  // );

  // db.collection('users').insertMany(
  //   [
  //     { name: 'Jen', age: 28 },
  //     { name: 'Gunther', age: 27 },
  //   ],
  //   (error, result) => {
  //     if (error) {
  //       return console.log('Unable to insert documents');
  //     }

  //     console.log(result.ops);
  //   }
  // );

  // db.collection('tasks').insertMany(
  //   [
  //     { description: 'Clean the house', completed: true },
  //     { description: 'Renew inspection', completed: false },
  //     { description: 'Pot plant', completed: false },
  //   ],
  //   (error, result) => {
  //     if (error) {
  //       return console.log('Unable to insert tasks');
  //     }

  //     console.log(result.ops);
  //   }
  // );

  // const updatePromise = db.collection('users').updateOne(
  //   {
  //     _id: new ObjectID('5eb48f05a4d82e21e1ebee23'),
  //   },
  //   {
  //     $inc: {
  //       age: 1,
  //     },
  //   }
  // );

  // updatePromise
  //   .then((result) => {
  //     console.log('result:', result);
  //   })
  //   .catch((error) => {
  //     console.log('error:', error);
  //   });

  // const updatePromise = db.collection('tasks').updateMany(
  //   {},
  //   {
  //     $set: {
  //       completed: true,
  //     },
  //   }
  // );

  // updatePromise
  //   .then((result) => {
  //     console.log('result:', result.modifiedCount);
  //   })
  //   .catch((error) => {
  //     console.log('error:', error);
  //   });

  // db.collection('users')
  //   .deleteMany({ age: 27 })
  //   .then((result) => {
  //     console.log('result:', result.deletedCount);
  //   })
  //   .catch((error) => {
  //     console.log('error:', error);
  //   });

  db.collection('tasks')
    .deleteOne({ description: 'Clean the house' })
    .then((result) => {
      console.log('result:', result.deletedCount);
    })
    .catch((error) => {
      console.log('error:', error);
    });
  //   client.close();
});
