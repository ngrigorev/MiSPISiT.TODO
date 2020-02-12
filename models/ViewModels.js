class Task {
    static count = 1;
    /**
     * @param {String} title title
     * @param {Date} start start date
     * @param {Date} end end date
     * @param {String} status status
     */
    constructor(title, start, end, status){
        let dateNow = new Date().toISOString().split('T')[0];

        this.title = title || '';
        this.startDate = start || dateNow;
        this.endDate = end || dateNow;
        this.status = status || null;
        this.id = Task.count++;
    }
}
exports.Task = Task;

class Status {
    static count = 1;
    constructor(name){
        this.id = Status.count++;
        this.name = name;
    }
}
exports.Status = Status;

exports.MainViewModel = class {
    /**
     * @param {String} title Title
     * @param {Array<Task>} tasks Array of Tasks
     * @param {Task} editItem Task to edit
     */
    constructor(title, tasks, statuses, editItem){
        this.title = title || '';
        this.tasks = tasks || [];
        this.statuses = statuses || [];
        this.editItem = editItem || null;
    }
}