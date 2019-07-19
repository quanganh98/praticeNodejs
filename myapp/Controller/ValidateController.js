
const checkIdNumber = ({ idNumber }) => new Promise((resolve, reject) => {
    var validate = new RegExp("^([0-9]{9})$");
    validate.test(idNumber)
        .then(data => {
            console.log("11");
            resolve(data);
        })
        .catch(err => reject(err))
})

module.exports = {
    checkIdNumber
}