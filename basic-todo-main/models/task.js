const mongoose = require('mongoose');

const dbUrl = process.env.DB_URL;
mongoose.connect(dbUrl);

const Task = mongoose.model('tasks', {
  title: {
    type: String,
    require: true,
  },
  detail: {
    type: String,
    require: true,
  },
});

module.exports = Task;
