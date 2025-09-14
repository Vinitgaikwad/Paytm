const zod = require('zod');

const userZodSchema = zod.object({
    username: zod.string().min(8),
    password: zod.string().min(8),
    firstname: zod.string(),
    lastname: zod.string()
}).strict();

const userSignInZodSchema = zod.object({
    username: zod.string().min(8),
    password: zod.string().min(8)
}).strict();

const userUpdateZodSchema = zod.object({
    username: zod.string().min(8).optional(),
    password: zod.string().min(8).optional(),
    firstname: zod.string().optional(),
    lastname: zod.string().optional()
}).strict();

module.exports = { userZodSchema, userSignInZodSchema, userUpdateZodSchema };