"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterInputDto = exports.LoginInputDto = exports.LoginOutputDto = void 0;
const nestjs_zod_1 = require("nestjs-zod");
const auth_1 = require("./auth");
class LoginOutputDto extends (0, nestjs_zod_1.createZodDto)(auth_1.loginOutputSchema) {
}
exports.LoginOutputDto = LoginOutputDto;
class LoginInputDto extends (0, nestjs_zod_1.createZodDto)(auth_1.loginInputSchema) {
}
exports.LoginInputDto = LoginInputDto;
class RegisterInputDto extends (0, nestjs_zod_1.createZodDto)(auth_1.registerInputSchema) {
}
exports.RegisterInputDto = RegisterInputDto;
//# sourceMappingURL=auth.dto.js.map