const express = require('express');
const router = express.Router();

//Controller
const TaskController = require("../controllers/TaskController");

//GET
router.get("/tasks", async (req,res) => {
    try {
        await TaskController.getAllTasks().then((response) => {res.json(response)});
    } catch (error) {
        res.send({error:e.message});
    }
});

//POST
router.post("/tasks/new", async (req,res) => {
    try {
        await TaskController.newTask(req.body).then((response) => {res.json(response)});
    } catch (e) {
        res.send({error:e.message});        
    }
});

module.exports = router;
