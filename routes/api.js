let db = require('../utils/sqlitedb');

exports.info = (r, q) => {
    q.render('api');
};

exports.auth = (r, q, next) =>{
    db.getRole(r.query).then(role => {
        r.isAdmin = role === 'Admin';
        r.isUser = role === 'Admin' || role === 'User';
        if(r.isUser){
            next();
        }
        else {
            q.status(401).json('Login or password is incorrect');
        }
    }).catch(x => q.status(500).json(x));
};

exports.get = (r, q) => {
    db.getTasks(+r.query.id).then(item => {
        q.json(item || {});
    }).catch(x => q.status(500).json(x));
};

exports.add = (r, q) =>{   
    if(r.isAdmin){
        db.getStatuses(+r.body.status).then(status => {
            r.body.status = status;
            db.addTask(r.body).then(x => {
                db.getLastTask().then(task => {
                    q.json(task);
                }).catch(x => q.status(500).json(x));
            }).catch(x => q.status(500).json(x));
        }).catch(x => q.status(500).json(x));
    } else {
        q.status(403).json('User does not have rights');
    }
};

exports.update = (r, q) => {
    if(r.isAdmin){
        r.body.id = +r.query.id;
        db.getStatuses(+r.body.status).then(x => {
            r.body.status = x;
            db.updateTask(r.body).then(y => {
                db.getTasks(r.body.id).then(task => {
                    q.json(task);
                }).catch(x => q.status(500).json(x));
            }).catch(x => q.status(500).json(x));
        }).catch(x => q.status(500).json(x));
    } else {
        q.status(403).json('User does not have rights');
    }
};

exports.delete = (r, q) => {
    if(r.isAdmin){
        db.getTasks(+r.query.id).then(task => {
            db.removeTask(+r.query.id).then(x => {
                q.json(task);
            }).catch(x => q.status(500).json(x));
        }).catch(x => q.status(500).json(x));
    } else {
        q.status(403).json('User does not have rights');
    }
};