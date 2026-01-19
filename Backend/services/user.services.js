const userModel = require('../models/user.model')

module.exports.createUser = async function({ fullname, email, password }) {
    const { firstname, lastname } = fullname;
    if (!firstname || !email || !password) {
        throw new Error('All fields are required');
    }
    const user = await userModel.create({
        fullname,
        email,
        password
    });
    return user;
}