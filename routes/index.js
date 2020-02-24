const router = require('express').Router();
const api = require('./api');

router.get('/', (r, q) => {
    q.redirect('/api');
});

router.get('/api', api.info);
router.get('/api/tasks', api.auth, api.get);
router.post('/api/tasks', api.auth, api.add);
router.put('/api/tasks', api.auth, api.update);
router.delete('/api/tasks', api.auth, api.delete);

module.exports = router;