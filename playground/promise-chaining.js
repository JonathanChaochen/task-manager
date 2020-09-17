require('../src/db/mongoose');

const User = require('../src/models/user');

// User.findByIdAndUpdate('5f558c6bba62eb66198ab5fa', { age: 1 })
//   .then((user) => {
//     console.log('user:', user);
//     return User.countDocuments({ age: 1 });
//   })
//   .then((results) => {
//     console.log('results:', results);
//   })
//   .catch((error) => {
//     console.log('error:', error);
//   });

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate('5f558c6bba62eb66198ab5fa', {
    age,
  });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeAndCount('5f558c6bba62eb66198ab5fa', 2)
  .then((count) => {
    console.log('count:', count);
  })
  .catch((e) => {
    console.log('e:', e);
  });
