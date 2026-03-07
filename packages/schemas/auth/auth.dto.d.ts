declare const LoginOutputDto_base: import("nestjs-zod").ZodDto<import("zod").ZodObject<{
    userId: import("zod").ZodString;
    token: import("zod").ZodString;
}, "strip", import("zod").ZodTypeAny, {
    userId: string;
    token: string;
}, {
    userId: string;
    token: string;
}>, false>;
export declare class LoginOutputDto extends LoginOutputDto_base {
}
declare const LoginInputDto_base: import("nestjs-zod").ZodDto<import("zod").ZodObject<{
    email: import("zod").ZodString;
    password: import("zod").ZodString;
}, "strip", import("zod").ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>, false>;
export declare class LoginInputDto extends LoginInputDto_base {
}
declare const RegisterInputDto_base: import("nestjs-zod").ZodDto<import("zod").ZodObject<{
    name: import("zod").ZodString;
    lastName: import("zod").ZodString;
    email: import("zod").ZodString;
    password: import("zod").ZodString;
}, "strip", import("zod").ZodTypeAny, {
    email: string;
    name: string;
    password: string;
    lastName: string;
}, {
    email: string;
    name: string;
    password: string;
    lastName: string;
}>, false>;
export declare class RegisterInputDto extends RegisterInputDto_base {
}
export {};
