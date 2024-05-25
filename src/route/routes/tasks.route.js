import { Router } from "express"
import tasksService from "../../services/tasks.service.js";
import RequestHandler from "../../utils/RequestHandler.js";

export const TasksRouter = Router();

TasksRouter.get('/', (req, res) => RequestHandler(req, res, tasksService.getTasksService));
TasksRouter.get('/:id', (req, res) => RequestHandler(req, res, tasksService.getTaskByIdService));
TasksRouter.post('/', (req, res) => RequestHandler(req, res, tasksService.createTaskService));
TasksRouter.put('/:id', (req, res) => RequestHandler(req, res, tasksService.updateTaskService));
TasksRouter.delete('/:id', (req, res) => RequestHandler(req, res, tasksService.deleteTaskService));