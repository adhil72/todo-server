const tasks = []

// sampleTask
// {
//     id: 1,
//     title: "Sample Task",
//     description: "This is a sample task",
//     dueDate: "2021-12-31",
//     status: "todo"
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
        task.title = updatedTask.title
        task.description = updatedTask.description
        task.dueDate = updatedTask.dueDate
        task.status = updatedTask.status
    }
}