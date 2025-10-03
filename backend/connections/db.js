const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://vinitgaikawad54_db_user:ouameojsZaRFpoeb@cluster0.3bjpeyj.mongodb.net/paytm?retryWrites=true&w=majority&appName=Cluster0');

        console.log('DB Started!');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;