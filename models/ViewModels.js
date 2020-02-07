exports.Task = class {
    /**
     * @param {String} title title
     * @param {Date} start start date
     * @param {Date} end end date
     * @param {String} status status
     */
    constructor(title, start, end, status){
        this.title = title || '';
        this.startDate = start || new Date();
        this.endDate = end || new Date();
        this.status = status || '';
    }
}

exports.MainViewModel = class {
    /**
     * @param {String} title Title
     * @param {Array<Task>} tasks Array of Tasks
     */
    constructor(title, tasks){
        this.title = title || '';
        this.tasks = tasks || [];
    }
}