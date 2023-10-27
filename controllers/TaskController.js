const TaskService = require("../services/TaskService");
const validateKeys = require("../middlewares/validateSchemaKeys");

class Task {
    //Create new Task
    async newTask(object){

        //Verificando se os campos obrigatórios estão válidos
        if(object.createdBy === undefined || object.title === undefined){

            //Se for verdadeiro para undefined para qualquer um dos 2, retorna este erro
            throw new Error("UserID and title are required");

            //Validando te os campos são do tipo String
        }else if(typeof object.createdBy == 'string' || typeof object.title == 'string'){

            //Validando se os itens do JSON são válidos, se são os mesmos do Schema do mongoose
            if(!validateKeys(object))
            try{
                const response = await TaskService.new(object);
                return response;
            } catch (e) {
                throw new Error(e);
            }
            
        }else{
            throw new Error("UserID and title must be a String");
        }
    }

    async getAllTasks(){
        try {
            const response = await TaskService.getAll();
            return response;
        } catch (e) {
            throw new Error(e);
        }
    }
}

module.exports = new Task();