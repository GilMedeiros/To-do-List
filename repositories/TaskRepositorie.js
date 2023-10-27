const mongoose = require("mongoose");
const task = require("../models/Task");

const taskModel = mongoose.model("Task", task);

class TaskRepositorie{

    async saveTask(object){
        const task = new taskModel(object);
        try {
            const response = await task.save();
            return response;
        } catch(e) {
            throw new Error(e);           
        }
    };
    
    async getAll(){
        try {
            const response = await taskModel.find();
            return response;
        } catch (e) {
            throw new Error(e);
        }
    }
}

module.exports = new TaskRepositorie();