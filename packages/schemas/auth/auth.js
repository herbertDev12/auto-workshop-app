"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changePasswordSchema = exports.registerInputSchema = exports.loginInputSchema = exports.loginOutputSchema = void 0;
const zod_1 = require("zod");
exports.loginOutputSchema = zod_1.z.object({
    userId: zod_1.z.string(),
    token: zod_1.z.string(),
});
exports.loginInputSchema = zod_1.z.object({
    email: zod_1.z.string(),
    password: zod_1.z.string(),
});
exports.registerInputSchema = zod_1.z.object({
    name: zod_1.z
        .string()
        .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces")
        .min(2, "Name must be at least 2 characters.")
        .max(32, "Name must be at most 32 characters."),
    lastName: zod_1.z
        .string()
        .regex(/^[a-zA-Z\s]+$/, "Last name can only contain letters and spaces")
        .min(2, "Last name must be at least 2 characters.")
        .max(32, "Last name must be at most 32 characters."),
    email: zod_1.z.string().email("Invalid email address."),
    password: zod_1.z
        .string()
        .min(8, "Password must be at least 8 characters.")
        .max(64, "Password must be at most 64 characters."),
});
const password = zod_1.z
    .string({ message: "Password is required" })
    .trim()
    .min(8, { message: "Password must be at least 8 characters" });
exports.changePasswordSchema = zod_1.z
    .object({
    password: password,
    newPassword: password,
    passwordConfirmation: zod_1.z
        .string({ message: "Password confirmation is required" })
        .trim()
        .min(1, { message: "Password confirmation is required" }),
})
    .refine((data) => data.newPassword === data.passwordConfirmation, {
    path: ["passwordConfirmation"],
    message: "The passwords must match",
});
//# sourceMappingURL=auth.js.map