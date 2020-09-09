require('../src/db/mongoose');

const Task = require('../src/models/task');

Task.findByIdAndDelete('5f5581ebd95e075a85c6eac4')
  .then((task) => {
    console.log('task:', task);
    return Task.countDocuments({ completed: false });
  })
  .then((result) => {
    console.log('result:', result);
  })
  .catch((error) => {
    console.log('error:', error);
  });
