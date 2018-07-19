const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.remove({}).then(result => {
//   console.log(result);
// });

//Todo.findOneAndRemove({_id: "5b511b4cdf9106df9346578f"})

Todo.findByIdAndRemove('5b511b4cdf9106df9346578f').then(todo => {
  console.log(todo);
});
