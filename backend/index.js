const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./connections/db.js')
const userRouter = require('./routes/userRouter.js')
const accountRouter = require('./routes/accountRouter.js')
const app = express();

connectDB();

dotenv.config();
app.use(express.json());
app.use('api/v1/user', userRouter);
app.use('api/v1/account', accountRouter);

app.listen(4444, () => {
    console.log("Server Started!");
});