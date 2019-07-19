var express = require('express');
var router = express.Router();
var UserController = require('../Controller/UserController');

router.get('/', function (req, res, next) {
    UserController.getAllUser()
        .then(data => {
            res.send(data)
        })
        .catch(err => res.status(500).send(err))
});

router.get('/:id', function (req, res, next) {
    UserController.getOneUser({ id: req.params.id })
        .then(data => {
            res.send(data)
        })
        .catch(err => res.status(500).send(err))
})

router.post('/', function (req, res, next) {
    const { username, password } = req.body
    UserController.createUser({ username, password })
        .then(data => {
            res.send(data)
        })
        .catch(err => res.status(500).send(err))
})


router.put('/:id', function (req, res, next) {
    const { password, role, status } = req.body
    UserController.updateUser({ id: req.params.id, password, role, status })
        .then(data => {
            res.send(data)
        })
        .catch(err => res.status(500).send(err))
})

router.delete('/:id', function (req, res, next) {
    UserController.deleteUser({ id: req.param.id })
        .then(data => {
            res.send(data)
        })
        .catch(err => res.status(500).send(err))
})

module.exports = router;