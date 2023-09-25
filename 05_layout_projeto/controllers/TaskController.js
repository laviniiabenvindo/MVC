const Task = require('../model/Task');

module.exports = class TaskController{
    static createTask(request, response){
        return response.render('tasks/create')
    }
    static ShowTask(request, response){
        return response.render('tasks/all')
    }
}