import { Router } from "express"
import tasksService from "../../services/tasks.service.js";
import RequestHandler from "../../utils/RequestHandler.js";

export const TasksRouter = Router();

TasksRouter.get('/get', (req, res) => RequestHandler(req, res, tasksService.getTasksService));
TasksRouter.get('/get/:id', (req, res) => RequestHandler(req, res, tasksService.getTaskByIdService));
TasksRouter.post('/create', (req, res) => RequestHandler(req, res, tasksService.createTaskService));
TasksRouter.put('/update/:id', (req, res) => RequestHandler(req, res, tasksService.updateTaskService));
TasksRouter.delete('/delete/:id', (req, res) => RequestHandler(req, res, tasksService.deleteTaskService));