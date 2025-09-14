const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstname: { required: true, type: String },
    lastname: { required: true, type: String },
    username: { required: true, type: String },
    password: { required: true, type: String }
});

module.exports = mongoose.model('users', userSchema);