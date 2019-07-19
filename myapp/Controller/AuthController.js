var UserController = require("./UserController")

const login = ({ username, password }) => new Promise((resolve, reject) => {
    UserController.getUserForAuth(username)
        .then(user => {
            if (!user || !username) {
                reject({ status: 400, message: "Incorrect username" })
            }
            else if (password === user.password) {
                resolve({ username: user.username, id: user._id })
            }
            else {
                reject({ status: 400, message: "Incorrect password" })
            }
        })
        .catch(err => reject(err))
})


module.exports = { login };