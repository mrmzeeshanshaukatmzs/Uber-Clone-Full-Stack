const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type: String,
            required: true,
            minlength: [3, 'First name must be at least 3 letters long.']
        },
        lastname:{
            type: String,
            required: true,
            minlength: [3, 'Last name must be at least 3 letters long.']
        }
    },
    email:{
        type: String,
        required: true,
        unique: true,
        minlength: [5,'Email must be at least 5 letters long.']
    },
    password:{
        type: String,
        required: true,
        select: false
    },
    socketId:{
        type: String
    }

})

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id: this._id}, process.env.JWT_Secret, { expiresIn: '24h' })
    return token
}

userSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password)
}

userSchema.statics.hashPassword = async function(password) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
};

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;