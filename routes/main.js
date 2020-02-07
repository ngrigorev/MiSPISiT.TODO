const {Task, MainViewModel} = require( '../models/ViewModels');

module.exports = (r, q) => {
    let model = new MainViewModel('TODO LIST');
    model.tasks = [
        new Task('Title 1', new Date(), new Date(), 'Finished' ),
        new Task('Title 2', new Date(), new Date(), 'In work' ),
        new Task('Title 3', new Date(), new Date(), 'In work' ),
        new Task('Title 4', new Date(), new Date(), 'Finished' ),
    ];
    q.render('index', model);
}