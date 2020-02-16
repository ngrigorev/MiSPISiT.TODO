let db = require('../utils/sqlitedb');
let {ErrorNotAuthorized} =  require('../models');

exports.info = (r, q) => {
    q.render('api');
};

exports.get = (r, q) =>{   
    if(r.params.id){
        db.getTasks(+r.params.id).then(item => {
            q.json(item || {});
        });
    } else {
        db.getTasks().then(tasks => {
            q.json(tasks);
        });
    }
};

exports.add = (r, q) =>{   
    console.log('body: ', r.body);
    db.getStatuses(+r.body.status).then(status => {
        r.body.status = status;
        db.addTask(r.body).then(x => {
            db.getLastTask().then(task => {
                q.json(task);
            });
        });
    });
};

exports.update = (r, q) => {
    r.body.id = +r.body.id;
    db.getStatuses(+r.body.status).then(x => {
        r.body.status = x;
        db.updateTask(r.body).then(y => {
            db.getTasks(r.body.id).then(task => {
                q.json(task);
            });
        });
    }); 
};

exports.delete = (r, q) => {
    db.getTasks(+r.params.id).then(task => {
        db.removeTask(+r.params.id).then(x => {
            q.json(task);
        })
    });
};