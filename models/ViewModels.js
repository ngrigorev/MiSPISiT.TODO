exports.Task = class {
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