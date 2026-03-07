import { z } from "zod";
export declare const loginOutputSchema: z.ZodObject<{
    userId: z.ZodString;
    token: z.ZodString;
}, "strip", z.ZodTypeAny, {
    userId: string;
    token: string;
}, {
    userId: string;
    token: string;
}>;
export declare const loginInputSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export declare const registerInputSchema: z.ZodObject<{
    name: z.ZodString;
    lastName: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    name: string;
    password: string;
    lastName: string;
}, {
    email: string;
    name: string;
    password: string;
    lastName: string;
}>;
export declare const changePasswordSchema: z.ZodEffects<z.ZodObject<{
    password: z.ZodString;
    newPassword: z.ZodString;
    passwordConfirmation: z.ZodString;
}, "strip", z.ZodTypeAny, {
    password: string;
    newPassword: string;
    passwordConfirmation: string;
}, {
    password: string;
    newPassword: string;
    passwordConfirmation: string;
}>, {
    password: string;
    newPassword: string;
    passwordConfirmation: string;
}, {
    password: string;
    newPassword: string;
    passwordConfirmation: string;
}>;
export type ILoginOutputDto = z.infer<typeof loginOutputSchema>;
export type ILoginInputDto = z.infer<typeof loginInputSchema>;
export type IChangePasswordDto = z.infer<typeof changePasswordSchema>;
export type IRegisterInputDto = z.infer<typeof registerInputSchema>;
