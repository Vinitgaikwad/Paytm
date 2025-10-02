const { userUpdateZodSchema } = require("../zod/user");

function chechUserUpdateMiddleware(req, res, next) {
    const { userObj } = req.body;
    const { authid } = req.headers;

    try {
        userUpdateZodSchema.parse(userObj);
        req.userObj = userObj;
        req.authId = authid;
        next();
    } catch (error) {
        res.json({
            succuss: false,
            error,
            errorMsg: "Invalid Changes!"
        });
    }
}

module.exports = { chechUserUpdateMiddleware }