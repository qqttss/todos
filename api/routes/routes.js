'use strict';

module.exports = function(app) {
  var todoList = require('../controllers/todoController');

  // todoList routes
  app.route('/tasks')
    .get(todoList.getAllTasks)
    .post(todoList.createAtask);

  app.route('/tasks/:id')
    .get(todoList.getATask)
    .patch(todoList.updateATask)
    .delete(todoList.deleteATask);
};
