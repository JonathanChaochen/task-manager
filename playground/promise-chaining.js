require('../src/db/mongoose');

const User = require('../src/models/user');

User.findByIdAndUpdate('5f558c6bba62eb66198ab5fa', { age: 1 })
  .then((user) => {
    console.log('user:', user);
    return User.countDocuments({ age: 1 });
  })
  .then((results) => {
    console.log('results:', results);
  })
  .catch((error) => {
    console.log('error:', error);
  });
