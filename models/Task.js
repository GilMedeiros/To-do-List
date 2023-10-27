const mongoose = require('mongoose');

const task = new mongoose.Schema({
    createdBy:{type: String, required: true},
    title:{type: String, required: true},
    description:{type: String},
    createdAt:{type: Date,default: Date.now},
    due_date:{type: Date},
    priority:{type: String},
    status:{type: String},
    containIn:{type: String}
});

module.exports = task;