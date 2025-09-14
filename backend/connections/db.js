const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://vinitgaikawad54_db_user:ouameojsZaRFpoeb@cluster0.3bjpeyj.mongodb.net/paytm');

        console.log('DB Started!');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;