const zod = require('zod');

const authZodSchema = zod.string();

const transactionZodSchema = zod.object({
    to: zod.string(),
    amount: zod.number().int().positive()
});

module.exports = { authZodSchema, transactionZodSchema }