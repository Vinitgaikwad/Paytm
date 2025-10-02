const { Router } = require("express");
const { checkUserMiddleware } = require("../middlewares/checkUserMiddleware");
const { checkSignInDataMiddleware } = require('../middlewares/checkSignInDataMiddleware.js');
const { chechUserUpdateMiddleware } = require("../middlewares/chechUserUpdateMiddleware.js");
const { createJWT, decodeJWT } = require("../utils/jwt.js");


const userModel = require('../models/UserModel.js');
const accountModel = require('../models/AccountModel.js');
const router = Router();

router.post('/sign-up', checkUserMiddleware, async (req, res) => {
    const { firstname, lastname, username, password } = req.userObj;

    try {
        const checkUser = await userModel.findOne({ username });

        if (checkUser !== null) {
            res.status(200).json({
                success: false,
                msg: "Username Taken!"
            });

            return;
        }

        const newUser = new userModel({
            firstname,
            lastname,
            username,
            password
        });

        const user = await newUser.save();

        const newAccount = new accountModel({
            accId: user._id,
            balance: Math.floor(Math.random() * 10000) + 1
        });

        await newAccount.save();

        res.status(200).json({
            success: true,
            msg: "Account Created Succussfully!"
        });

    } catch (error) {
        res.status(200).json({
            success: false,
            msg: "Data Not Save"
        });
    }
});

router.post('/sign-in', checkSignInDataMiddleware, async (req, res) => {
    const userObj = req.userObj;

    try {
        const ifExist = await userModel.findOne(userObj).select("username firstname lastname");

        if (!ifExist) {
            res.status(404).json({
                success: false,
                msg: "Incorrect Credentials!"
            });
            return;
        }

        const authToken = createJWT({ _id: ifExist._id });

        res.status(201).json({
            success: true,
            msg: "Sign-In Successful",
            authId: authToken,
            userInfo: {
                userObj: ifExist
            }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            msg: "Internal Error"
        });
    }
});

router.put('/update', chechUserUpdateMiddleware, async (req, res) => {
    const userObj = req.userObj;
    const authId = req.authId;

    const decoded = decodeJWT(authId);

    if (!decoded) {
        res.status(404).json({
            success: false,
            msg: "Incorrect Credentials!"
        });
        return;
    }

    try {
        if (userObj.username !== undefined) {
            const findUsername = await userModel.findOne({ username: userObj.username });
            if (findUsername._id.toString() !== decoded._id.toString()) {
                res.status(400).json({
                    success: false,
                    msg: "Username Taken!"
                });
                return;
            }
        }

        await userModel.findOneAndUpdate(
            { _id: decoded._id },
            { "$set": userObj }
        );

        res.status(200).json({
            success: true,
            msg: 'Update Complete!'
        });
    } catch (error) {
        res.status(404).json({
            success: false,
            msg: 'Internal Error!'
        });
    }
});

module.exports = router;