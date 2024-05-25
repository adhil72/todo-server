const tasks = []

// sampleTask
// {
//     id: 1,
//     title: "Sample Task",
//     description: "This is a sample task",
//     dueDate: "2021-12-31",
//     status: "todo",
//     createdAt: "2021-09-01T12:00:00",
//     updatedAt: "2021-09-01T12:00:00"
// }
export const dataHandler = {
    getTasks: () => tasks,
    getTaskById: (id) => tasks.find(task => task.id === id),
    addTask: (task) => tasks.push(task),
    removeTask: (id) => {
        const taskIndex = tasks.findIndex(task => task.id === id)
        tasks.splice(taskIndex, 1)
    },
    updateTask: (id, updatedTask) => {
        const task = tasks.find(task => task.id === id)
        if (updatedTask.title) task.title = updatedTask.title
        if (updatedTask.description) task.description = updatedTask.description
        if (updatedTask.dueDate) task.dueDate = updatedTask.dueDate
        if (updatedTask.status) task.status = updatedTask.status
        task.updatedAt = new Date().toISOString()
    }
}