const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

//const id = '5b510b6ef1f53919a8cc1d1611';
const id = '5b4e8545792cea1fec3465b2';

// if (!ObjectID.isValid(id)) {
//   console.log('Id not valid');
// }

// Todo.find({
//   _id: id
// }).then(todos => {
//   console.log('Todos', todos);
// });

// Todo.findOne({
//   _id: id
// }).then(todo => {
//   console.log('Todo', todo);
// });

// Todo.findById({
//   _id: id
// })
//   .then(todo => {
//     if (!todo) {
//       return console.log('Id not found');
//     }
//     console.log('Todo By Id', todo);
//   })
//   .catch(err => {
//     console.log(err);
//   });

User.findById(id)
  .then(user => {
    if (!user) {
      return console.log('User ID not found');
    }
    console.log('User By Id', user);
  })
  .catch(err => console.log(err));
