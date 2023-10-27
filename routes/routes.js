const express = require('express');
const router = express.Router();

//Controller
const TaskController = require("../controllers/TaskController");

//GET
router.get("/tasks", (req,res) => {
    res.send('Rota principal')
});

//POST
router.post("/taskes/new", async (req,res) => {
    try {
        await TaskController.new(req.body).then((response) => {res.json(response)});
    } catch (e) {
        res.send({error:e.message});        
    }
});

module.exports = router;
