const { Router } = require("express");
const { authMiddleware } = require("../middlewares/authMiddleware");
const accountModel = require('../models/AccountModel.js');
const { transactionZodSchema } = require("../zod/account.js");
const mongoose = require("mongoose");

const router = Router();

router.get('/balance', authMiddleware, async (req, res) => {
    const userId = req.userId;

    try {
        const account = await accountModel.findOne({ accId: userId });

        res.status(200).json({
            succuss: true,
            error: false,
            account
        });
    } catch (error) {
        res.status(400).json({
            succuss: false,
            error: true,
            errorMsg: "internal faultS"
        });
    }
});

router.post('/transaction', authMiddleware, async (req, res) => {
    const userId = req.userId;
    const { userObj } = req.body;

    const parsed = transactionZodSchema.safeParse(userObj);
    if (!parsed.success) {
        return res.status(400).json({
            succuss: false,
            error: true,
            errorMsg: parsed.error.errors
        });
    }

    const session = await mongoose.startSession();
    try {
        session.startTransaction();

        const senderAccount = await accountModel.findOne({ accId: userId }).session(session);
        const receiverAccount = await accountModel.findOne({ accId: userObj.to }).session(session);

        if (!receiverAccount) {
            throw new Error("Receiver not found");
        }

        if (senderAccount.balance < userObj.amount) {
            await session.abortTransaction();
            return res.status(400).json({
                succuss: false,
                error: true,
                errorMsg: "Insufficient balance"
            });
        }

        await accountModel.findOneAndUpdate(
            { accId: userId },
            { $inc: { balance: -userObj.amount } },
            { session }
        );

        await accountModel.findOneAndUpdate(
            { accId: userObj.to },
            { $inc: { balance: userObj.amount } },
            { session }
        );

        await session.commitTransaction();

        res.json({
            succuss: true,
            error: false,
            message: "Transaction Successful"
        });
    } catch (error) {
        await session.abortTransaction();
        res.status(500).json({
            succuss: false,
            error: true,
            errorMsg: error.message
        });
    } finally {
        session.endSession();
    }
});


module.exports = router;