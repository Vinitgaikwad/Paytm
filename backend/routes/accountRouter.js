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
            msg: "Account Info Loaded Succussful!",
            account
        });
    } catch (error) {
        res.status(400).json({
            succuss: false,
            msg: error.message,
            account: null
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
            msg: parsed.error.errors
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

        if (senderAccount.balance < userObj.amount || userId === userObj.to) {
            await session.abortTransaction();
            return res.status(400).json({
                succuss: false,
                msg: "Insufficient balance or incorrect account"
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
            msg: "Transaction Successful"
        });
    } catch (error) {
        await session.abortTransaction();
        res.status(500).json({
            succuss: false,
            msg: error.message
        });
    } finally {
        session.endSession();
    }
});


module.exports = router;