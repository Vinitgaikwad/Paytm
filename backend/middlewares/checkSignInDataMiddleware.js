const { userSignInZodSchema } = require('../zod/user.js');

function checkSignInDataMiddleware(req, res, next) {
    const { userObj } = req.body;

    try {
        userSignInZodSchema.parse(userObj);
        req.userObj = userObj;
        next();
    } catch (error) {
        res.status(404).json({
            succuss: false,
            error,
            errorMsg: "Incorrect Entries"
        });
    }
}
module.exports = { checkSignInDataMiddleware }