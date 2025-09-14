const jwt = require('jsonwebtoken');

function createJWT(obj) {
    const authToken = jwt.sign(obj, process.env.SECRETE, { expiresIn: '1hr' });
    return authToken;
}

function decodeJWT(authToken) {
    try {
        const decoded = jwt.verify(authToken, process.env.SECRETE);
        return decoded;
    } catch (error) {
        return false;
    }
}

module.exports = { createJWT, decodeJWT }