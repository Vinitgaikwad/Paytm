const { userZodSchema } = require("../zod/user");

function checkUserMiddleware(req, res, next) {
    const { userObj } = req.body;

    try {
        userZodSchema.parse(userObj);
        req.userObj = userObj;
        next();
    } catch (error) {
        res.status(400).json({
            success: false,
            error,
            errorMsg: 'Incorrect Entries'
        });
    }
}

module.exports = { checkUserMiddleware }