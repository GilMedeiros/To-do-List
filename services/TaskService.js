const TaskRepositorie = require("../repositories/TaskRepositorie");

class TaskService{

    async new(object){
        //TODO: Verificar se o usuário é válido, verificar se o usuário está logado
        try {
           const response = await TaskRepositorie.saveTask(object);
           return response;
        } catch (e) {
             throw new Error(e);
        }
    }

    async getAll(){
        try {
            const response = await TaskRepositorie.getAll();
            return response;
        } catch (e) {
            throw new Error(e);
        }
    }
}

module.exports = new TaskService();