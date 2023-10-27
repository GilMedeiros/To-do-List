const mongoose = require("mongoose")
const task = require("../models/Task");

const taskModel = mongoose.model("Task", task);

//Validate keys
function validateKeys(object){
    const schemaKeys = Object.keys(taskModel.schema.paths); //Pegando as keys do Schema do mongoose
    const invalidKeys = Object.keys(object).filter((key) => !schemaKeys.includes(key)); //Pegando as keys do objeto JSON recebido no POST da rota
    if(invalidKeys.length > 0){
        throw new Error('The JSON body has invalid keys');
    }
    return;
};

module.exports = validateKeys;