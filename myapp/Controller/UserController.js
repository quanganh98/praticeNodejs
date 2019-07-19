const fs = require('fs')
const userModel = require('../Models/UserModel')

const createUser = ({ username, password }) => new Promise((resolve, reject) => {
    console.log(username)
    userModel.create({
        username,
        password
    })
        .then(data => resolve(data))
        .catch(err => reject(err))
})

const getAllUser = () => new Promise((resolve, reject) => {
    userModel.find()
        .select('username password')
        .then(data => resolve(data))
        .catch(err => reject(err))
})

const getOneUser = ({ id }) => new Promise((resolve, reject) => {
    userModel.findById({ _id: id })
        .select('username password')
        .then(data => resolve(data))
        .catch(err => reject(err))
})

const getUserForAuth = (username) => new Promise((resolve, reject) => {
    userModel.findOne({
        username
    }).then(data => resolve(data)
    ).catch(err => reject(err))
})

const updateUser = ({ id, password, role, status }) => new Promise((resolve, reject) => {
    const data = {
        password,
        role,
        status
    }
    console.log(data)
    userModel.findOneAndUpdate({ _id: id }, data)
        .then(data => resolve(data))
        .catch(err => reject(err))
})

const deleteUser = ({ id }) => new Promise((resolve, reject) => {
    userModel.deleteOne({ _id: id })
        .then(data => resolve(data))
        .catch(err => reject(err))
})

module.exports = {
    createUser,
    getAllUser,
    getOneUser,
    updateUser,
    deleteUser,
    getUserForAuth
}