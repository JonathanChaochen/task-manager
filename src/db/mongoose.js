const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});



// const me = new User({
//   name: ' Mike ',
//   email: 'MIKw@MEAD.io',
//   password: 'Password123'
// });

// me.save()
//   .then((me) => {
//     console.log('me:', me);
//   })
//   .catch((error) => {
//     console.log('Error:', error);
//   });



// const task = new Task({
//   description: ' Eat lunch',
// });

// task
//   .save()
//   .then((task) => {
//     console.log('task:', task);
//   })
//   .catch((error) => {
//     console.log('Error:', error);
//   });
