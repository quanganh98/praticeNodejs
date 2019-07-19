var express = require('express');
var router = express.Router();
var authController = require("../Controller/AuthController")

router.post("/login", (req, res) => {
    authController
        .login(req.body)
        .then(userInfo => {
            req.session.userInfo = { username: userInfo.username, id: userInfo.id };
            console.log(req.session.userInfo);
            res.send({ success: 1, userInfo });
        })
        .catch(error => res.status(500).send(error.err));
});

router.get("/", (req, res) => {
    console.log(req.session.userInfo);
    if (req.session.userInfo) {
        res.send(req.session.userInfo);
    }
    else {
        res.send('no data');
    }
});

router.get('/test', function (req, res) {
    req.session.sess = "test";
    console.log(req.session);
    res.send("data setup");
});

router.get('/test1', function (req, res) {
    console.log(req.session);
    res.send("check session " + req.session.sess);
});



router.delete("/", (req, res) => {
    req.session.destroy();
    res.send("Logged out");
});


module.exports = router

