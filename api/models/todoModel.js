'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
  name: {
    type: String,
    required: 'kindly enter the name of the task'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports  = mongoose.model('Task', TaskSchema);
