const router = require('express').Router();
const main = require('./main');
const crud = require('./crud');
const api = require('./api');

router.get('/', (r, q) => {
    q.redirect('/api');
});

router.get('/api', api.info);
router.get('/api/tasks', api.login, api.get);
router.post('/api/tasks', api.login, api.add);
router.put('/api/tasks', api.login, api.update);
router.delete('/api/tasks', api.login, api.delete);

module.exports = router;