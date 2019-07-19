const fs = require('fs')
const guestModel = require('../Models/GuestModel')
// const excelToJson = require('convert-excel-to-json');

// fs.readFile('./Database/listGuest.json', 'utf8', (err, jsonString) => {
//     if (err) {
//         console.log("File read failed:", err)
//         return
//     }
//     listGuest = jsonString;
// })

// listGuest = excelToJson({
//     sourceFile: './Database/Danh sach KH.xlsx',
//     columnToKey: {
//         B: 'account',
//         C: 'guestName',
//         D: 'idNumber',
//         E: 'phoneNumber',
//         F: 'address'
//     }
// });

const createGuest = ({ account, guestName, idNumber, phoneNumber, address }) => new Promise((resolve, reject) => {
    console.log(account)
    guestModel.create({
        account,
        guestName,
        idNumber,
        phoneNumber,
        address
    })
        .then(data => resolve(data))
        .catch(err => reject(err))
})

const getAllGuest = () => new Promise((resolve, reject) => {
    guestModel.find()
        .select('account guestName idNumber phoneNumber address')
        .then(data => resolve(data))
        .catch(err => reject(err))
})

const getOneGuest = ({ id }) => new Promise((resolve, reject) => {
    guestModel.findOne({ _id: id })
        .select('account guestName idNumber phoneNumber address')
        .then(data => resolve(data))
        .catch(err => reject(err))
})

const updateGuest = ({ id, guestName, idNumber, phoneNumber, address }) => new Promise((resolve, reject) => {
    const data = {
        guestName,
        idNumber,
        phoneNumber,
        address
    }
    guestModel.findOneAndUpdate({ _id: id }, data)
        .then(data => resolve(data))
        .catch(err => reject(err))
})

const deleteGuest = ({ id }) => new Promise((resolve, reject) => {
    guestModel.deleteOne({ _id: id })
        .then(data => resolve(data))
        .catch(err => reject(err))
})

module.exports = {
    createGuest,
    getAllGuest,
    getOneGuest,
    updateGuest,
    deleteGuest
}


// function checkId(id) {
//     var found = 0;
//     listGuest.sheet1.forEach(element => {
//         if (element.account === id) {
//             found = 1;
//         }
//     });
//     return found;
// }

// exports.findAll = function () {
//     return listGuest;
// };

// exports.save = function (guest) {
//     console.log(checkId(guest.guest.account));
//     if (checkId(guest.guest.account) === 1) {
//         return 0;
//     }
//     else {
//         listGuest.sheet1.push(guest.guest)
//         return 1;
//     }
// }

// exports.findOne = function (id) {
//     var guestFound;
//     listGuest.sheet1.forEach(element => {
//         if (element.account === id) {
//             guestFound = element;
//         }
//     });
//     return guestFound;
// }

// exports.update = function (id, guest) {
//     var guestFound;
//     listGuest.sheet1.forEach(element => {
//         if (element.account === id) {
//             // console.log(element);
//             guestFound = element;
//             return 1;
//         }
//     });
//     if (guestFound != undefined) {
//         guestFound.guestName = guest.guest.guestName;
//         guestFound.idNumber = guest.guest.idNumber;
//         guestFound.phoneNumber = guest.guest.phoneNumber;
//         guestFound.address = guest.guest.address;
//         return 1;
//     }
//     else {
//         return 0;
//     }
// }

// exports.delete = function (id) {
//     var index = listGuest.sheet1.findIndex(function (item, i) {
//         return item.account === id
//     });
//     console.log(index)
//     if (index != undefined) {
//         userList.users.splice(index, 1);
//         console.log('delete')
//         return 1;
//     }
//     else {
//         return 0;
//     }
// }