'use strict';

var Task = require('../models/todoModel');

// get all tasks
exports.getAllTasks = function(req, res) {
  Task.find({}, function(err, tasks) {
    if (err) {
      return res.status(404).send(err);
    }
    res.send({
      tasks: tasks
    });
  });
};

// create a new task
exports.createAtask = function(req, res) {
  var newtask = new Task(req.body);
  newtask.save(function(err, task) {
    if (err) {
      return res.status(404).send(err);
    }
    res.send(task);
  });
};

// get an indivudual task
exports.getATask = function(req, res) {
  Task.findById(req.params.id, function(err, task) {
    if (err) {
      return res.status(404).send(err);
    }
    res.send({
      task: task
    });
  });
};

// update an indivudual task
exports.updateATask = function(req, res) {
  //console.log('request body:\n', req.body);
  Task.findByIdAndUpdate( req.params.id, { $set: { name: req.body.name } }, { new: true }, function(err, task) {
    if (err)
      return res.status(404).send(err);
    res.send({
      task: task
    });
  });
};

// delete an indivudual task
exports.deleteATask = function(req, res) {
  Task.remove({
    _id: req.params.id
  }, function(err, task) {
    if (err) {
      return res.status(404).send(err);
    }
    res.send({ message: 'Task has been successfully deleted' });
  });
};
