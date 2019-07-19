var express = require('express');
var router = express.Router();
var GuestController = require('../Controller/GuestController');

router.get('/', function (req, res, next) {
    GuestController.getAllGuest()
        .then(data => {
            res.send(data)
        })
        .catch(err => res.status(500).send(err))
});

router.get('/:id', function (req, res, next) {
    GuestController.getOneGuest({ id: req.params.id })
        .then(data => {
            res.send(data)
        })
        .catch(err => res.status(500).send(err))
})

router.post('/', function (req, res, next) {
    console.log(req.body)
    var guest = req.body
    GuestController.createGuest({ account: guest.account, guestName: guest.guestName, idNumber: guest.idNumber, phoneNumber: guest.phoneNumber, address: guest.address })
        .then(data => {
            res.send(data)
        })
        .catch(err => res.status(500).send(err))
})

router.put('/:id', function (req, res, next) {
    var guest = req.body
    GuestController.updateGuest({ id: req.params.id, guestName: guest.guestName, idNumber: guest.idNumber, phoneNumber: guest.phoneNumber, address: guest.address })
        .then(data => {
            res.send(data)
        })
        .catch(err => res.status(500).send(err))
})

router.delete('/:id', function (req, res, next) {
    GuestController.deleteGuest({ id: req.param.id })
        .then(data => {
            res.send(data)
        })
        .catch(err => res.status(500).send(err))
})

module.exports = router;
