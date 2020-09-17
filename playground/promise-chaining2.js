require('../src/db/mongoose');

const Task = require('../src/models/task');

// Task.findByIdAndDelete('5f5581ebd95e075a85c6eac4')
//   .then((task) => {
//     console.log('task:', task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((result) => {
//     console.log('result:', result);
//   })
//   .catch((error) => {
//     console.log('error:', error);
//   });

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount('5f55fc7488552b6f0cc3ce46')
  .then((count) => {
    console.log('count:', count);
  })
  .catch((error) => {
    console.log('error:', error);
  });
