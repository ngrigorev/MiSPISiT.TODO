const {Task, MainViewModel} = require( '../models/ViewModels');
const db = require('../utils/localeStorage');

module.exports = (r, q) => {
    let model = new MainViewModel('TODO LIST', db.getTasks(), db.getStatuses());
    q.render('index', model);
}