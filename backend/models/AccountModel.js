const mongoose = require("mongoose");

const accountSchema = mongoose.Schema({
    accId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "users"
    },
    balance: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('accounts', accountSchema);