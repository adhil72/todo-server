import { dataHandler } from "../data/dataHandler.js"
import { randomUUID } from 'crypto'

const createTaskService = async (req) => {
    const task = req.body
    task.createdAt = new Date().toISOString()
    task.id = randomUUID()
    task.updatedAt = task.createdAt
    dataHandler.addTask(task)
    return { message: 'Task created successfully', data: {} }
}

const getTasksService = async () => {
    const tasks = dataHandler.getTasks().sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
    return { message: 'Tasks fetched successfully', data: tasks }
}

const getTaskByIdService = async (req) => {
    const taskId = req.params.id
    const task = dataHandler.getTaskById(taskId)
    return { message: 'Task fetched successfully', data: task }
}

const updateTaskService = async (req) => {
    const taskId = req.params.id
    let updatedTask = req.body
    dataHandler.updateTask(taskId, updatedTask)
    return { message: 'Task updated successfully', data: {} }
}

const deleteTaskService = async (req) => {
    const taskId = req.params.id
    dataHandler.removeTask(taskId)
    return { message: 'Task deleted successfully', data: {} }
}

export default { createTaskService, getTasksService, getTaskByIdService, updateTaskService, deleteTaskService }