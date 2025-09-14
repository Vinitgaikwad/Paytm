const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./connections/db.js')
const userRouter = require('./routes/userRouter.js')
const app = express();

connectDB();

dotenv.config();
app.use(express.json());
app.use('/user', userRouter);

app.listen(4444, () => {
    console.log("Server Started!");
});