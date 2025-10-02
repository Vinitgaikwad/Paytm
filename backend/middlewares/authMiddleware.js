const { decodeJWT } = require("../utils/jwt");
const { authZodSchema } = require("../zod/account");


function authMiddleware(req, res, next) {
    const Authorization = req.headers.authorization;
    const { success } = authZodSchema.safeParse(Authorization);
    const decoded = decodeJWT(Authorization);

    if (!Authorization || !success || !decoded) {
        res.status(400).json({
            success: false,
            error: true,
            errorMsg: "Auth False!"
        });
        return;
    }

    req.userId = decoded._id
    next();
}

module.exports = { authMiddleware }