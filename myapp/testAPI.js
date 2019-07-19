var fs = require('fs');
const IssuedByList = require('./Database/IssuedBy.json')
const CountryList = require('./Database/CountryList.json')
const BankList = require('./Database/BankList.json')

// var mongoose = require('mongoose');
// var mongoDB = 'mongodb://127.0.0.1/my_database';
// mongoose.connect(mongoDB, { useNewUrlParser: true });
// mongoose.Promise = global.Promise;
// var db = mongoose.connection;

const excelToJson = require('convert-excel-to-json');

// fs.readFile('./Database/Chatbot_CTS_Validate data.json', 'utf8', (err, jsonString) => {
//     if (err) {
//         console.log("File read failed:", err)
//         return
//     }
//     listGuest = jsonString;
// })

// const listCountry = excelToJson({
//     sourceFile: './Database/Chatbot_CTS_Validate data.xlsx',
//     columnToKey: {
//         D: 'Country',
//     }
// });

// listCountry.Data.shift();
// console.log(listCountry)

// var json = JSON.stringify(listCountry.Data).split(" -->  ")
// console.log(json)
// console.log(IssuedByList.Data);
// IssuedByList.Data.forEach( (issue) => {
//     console.log(issue);
// } )
// const listBank;
// CountryList.forEach(element => {
//     // console.log(element.IssuedBy.split(","));
//     var json = element.Country.split(",");
//     element.id = json[0];
//     element.Name = json[1];
//     console.log(element);
// });
// var json = JSON.stringify(CountryList)
// fs.writeFile('./Database/CountryList.json', json, 'utf8', function () { });

// console.log(listCountry);

// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// check id is idNumber, each number in 0-9 and length is 9
function isIdIdNumber(idIdNumber) {
    var validate = new RegExp("^([0-9]{9})$");
    return validate.test(idIdNumber)
}
// check id is idCitizen, each number in 0-9 and length is 12
function isCitizenIdentity(idCitizen) {
    var validate = new RegExp("^([0-9]{12})$");
    return validate.test(idCitizen)

}
// check id is idPassport start with one of alphabet, next is 7 number random in 0-9
function isPassport(idPassport) {
    var validate = new RegExp("^(\[A-Z])[0-9]{7}$");
    return validate.test(idPassport)
}

// check age by date of birth
function checkAge(dateOfBirth) {
    var date = new Date();
    // console.log((date.getFullYear() - dateOfBirth.getFullYear()))
    if ((date.getFullYear() - dateOfBirth.getFullYear()) > 18) {
        return true;
    }
    else if ((date.getFullYear() - dateOfBirth.getFullYear()) === 18) {
        const checkDay = (date.getDate() - dateOfBirth.getDate());
        const checkMouth = (date.getMonth() - dateOfBirth.getMonth());
        // console.log(checkMouth);
        if (checkMouth >= 0 && checkDay >= 0) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}

function checkDateOfIssue(dateOfIssue) {
    var date = new Date();
    if (date.getTime() > dateOfIssue) {
        return true;
    }
    else {
        return false;
    }
}

function checkDateOfExpiry(dateOfExpiry) {
    var date = new Date();
    if (date.getTime() < dateOfExpiry) {
        return true;
    }
    else {
        return false;
    }
}

function checkNameOfBank(bankName) {
    let found = false;
    BankList.forEach(element => {
        // console.log(element.Name === bankName);
        if (bankName === element.Name) {
            found = true;
        }
    });
    return found;
}

function checkCountry(countryKey) {
    let found = false;
    CountryList.forEach(element => {
        // console.log(element.Name === bankName);
        if (countryKey === element.id) {
            found = true;
        }
    });
    return found;
}

function checkIssuedBy(IssuedKey) {
    let found = false;
    IssuedByList.forEach(element => {
        // console.log(element.Name === bankName);
        if (IssuedKey === element.id) {
            found = true;
        }
    });
    return found;
}

function checkPhoneNumber(phoneNumber) {
    var validate = new RegExp("^(09|03|[2|8|9])+([0-9]{8})$");;
    return validate.test(phoneNumber);
}



console.log(isIdIdNumber("123456789"));
console.log(isCitizenIdentity("123123123123"));
console.log(isPassport("A1234567"));
console.log(checkAge(new Date("2001-06-15")));
console.log(checkDateOfIssue(new Date("2011-06-15")));
console.log(checkDateOfExpiry(new Date("2022-06-15")));
console.log(checkPhoneNumber("0395928859"));
console.log(checkNameOfBank("WOORI"));
console.log(checkCountry("VF"));
console.log(checkIssuedBy("235"));


