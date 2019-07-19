var rp = require('request-promise');

var options = {
    method: 'POST',
    uri: 'http://localhost:8081/validate/checkDateOfExpiry',
    form: {
        // Like <input type="text" name="name">
        bankName: 'ACB',
        date: new Date("2022-06-15")
    },
    json: true // Automatically parses the JSON string in the response
};

rp(options)
    .then(function (repos) {
        console.log(repos);
    })
    .catch(function (err) {
        console.log("Request Failed")
    });