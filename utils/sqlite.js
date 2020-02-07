const sqlite = require('sqlite3').verbose();
const {MainViewModel} = require('../models/ViewModels');
const path = 'task.db';

function connection() {
    return new sqlite.Database(path, err => {
        if (err) console.error('Database connect. ', err.message);
        else console.log('Database is connected');
    });
}

exports.getTasks = function(id) {
    let context = connection();

    context.serialize(() => {
        let query = 'SELECT * FROM Task';
        let params = [];
        if (id){
            query += ' WHERE ID = ?';
            params.push(id);
        }

        context.all(query, params, (err, data) => {
            if (err) {
                console.error('Get tasks from database. ', err);
                throw err;
            }

            return data;
        });
    });
}