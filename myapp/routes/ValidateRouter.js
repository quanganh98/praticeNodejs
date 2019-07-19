var express = require('express');
var router = express.Router(); 
const IssuedByList = require('../Database/IssuedBy.json')
const CountryList = require('../Database/CountryList.json')
const BankList = require('../Database/BankList.json')
// var ValidateController = require('../Controller/ValidateController');

router.post('/idNumber', function (req, res, next) {
    // console.log(req.body);
    var validate = new RegExp("^([0-9]{9})$");
    if (validate.test(req.body.idNumber)) {
        res.send("1");
    }
    else {
        res.send("0");
    }
});

router.post('/idCitizenIdentity', function (req, res, next) {
    // console.log(req.body);
    var validate = new RegExp("^([0-9]{12})$");
    if (validate.test(req.body.idCitizenIdentity)) {
        res.send("1");
    }
    else {
        res.send("0");
    }
});

router.post('/idPassport', function (req, res, next) {
    // console.log(req.body);
    var validate = new RegExp("^(\[A-Z])[0-9]{7}$");
    if (validate.test(req.body.idPassport)) {
        res.send("1");
    }
    else {
        res.send("0");
    }
});

router.post('/phoneNumber', function (req, res, next) {
    // console.log(req.body);
    var validate = new RegExp("^(09|03|[2|8|9])+([0-9]{8})$");;
    if (validate.test(req.body.phoneNumber)) {
        res.send("1");
    }
    else {
        res.send("0");
    }
});

router.post('/checkAge', function (req, res, next) {
    var date = new Date();
    dateOfBirth = new Date(req.body.date);
    // console.log((date.getFullYear() - dateOfBirth.getFullYear()))
    if ((date.getFullYear() - dateOfBirth.getFullYear()) > 18) {
        res.send("1");
    }
    else if ((date.getFullYear() - dateOfBirth.getFullYear()) === 18) {
        const checkDay = (date.getDate() - dateOfBirth.getDate());
        const checkMouth = (date.getMonth() - dateOfBirth.getMonth());
        // console.log(checkMouth);
        if (checkMouth >= 0 && checkDay >= 0) {
            res.send("1");
        }
        else {
            res.send("0");
        }
    }
    else {
        res.send("0");
    }
});

router.post('/checkDateOfIssue', function (req, res, next) {
    dateOfIssue = new Date(req.body.date);
    var date = new Date();
    if (date.getTime() > dateOfIssue) {
        res.send("1");
    }
    else {
        res.send("0");
    }
});

router.post('/checkDateOfExpiry', function (req, res, next) {
    dateOfIssue = new Date(req.body.date);
    var date = new Date();
    if (date.getTime() < dateOfIssue) {
        res.send("1");
    }
    else {
        res.send("0");
    }
});


router.post('/checkNameOfBank', function (req, res, next) {
    let bankName = req.body.bankName;
    let found = false;
    BankList.forEach(element => {
        // console.log(element.Name === bankName);
        if (bankName === element.Name) {
            found = true;
        }
    });
    res.send(found)
});

router.post('/checkCountry', function (req, res, next) {
    let country = req.body.country;
    let found = false;
    CountryList.forEach(element => {
        // console.log(element.Name === bankName);
        if (country === element.Name) {
            found = true;
        }
    });
    res.send(found)
});

router.post('/checkIssuedBy', function (req, res, next) {
    let issuedBy = req.body.issuedBy;
    let found = false;
    IssuedByList.forEach(element => {
        // console.log(element.Name === bankName);
        if (issuedBy === element.Name) {
            found = true;
        }
    });
    res.send(found)
});


module.exports = router