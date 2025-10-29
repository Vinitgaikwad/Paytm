const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./connections/db.js')
const userRouter = require('./routes/userRouter.js')
const accountRouter = require('./routes/accountRouter.js')
const cors = require('cors');
const app = express();



dotenv.config();
connectDB();
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.use('/api/v1/user', userRouter);
app.use('/api/v1/account', accountRouter);

app.listen(4444, () => {
    console.log("Server Started!");
});