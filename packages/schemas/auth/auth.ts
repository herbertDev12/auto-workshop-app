import { z } from "zod";

export const loginOutputSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  token: z.string(),
});

export const loginInputSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const registerInputSchema = z.object({
  name: z
    .string()
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces")
    .min(2, "Name must be at least 2 characters.")
    .max(32, "Name must be at most 32 characters."),
  lastName: z
    .string()
    .regex(/^[a-zA-Z\s]+$/, "Last name can only contain letters and spaces")
    .min(2, "Last name must be at least 2 characters.")
    .max(32, "Last name must be at most 32 characters."),
  email: z.string().email("Invalid email address."),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters.")
    .max(64, "Password must be at most 64 characters."),
});
  
const password = z
  .string({ message: "Password is required" })
  .trim()
  .min(8, { message: "Password must be at least 8 characters" });

export const changePasswordSchema = z
  .object({
    password: password,
    newPassword: password,
    passwordConfirmation: z
      .string({ message: "Password confirmation is required" })
      .trim()
      .min(1, { message: "Password confirmation is required" }),
  })
  .refine((data) => data.newPassword === data.passwordConfirmation, {
    path: ["passwordConfirmation"],
    message: "The passwords must match",
  });

export type ILoginOutputDto = z.infer<typeof loginOutputSchema>;
export type ILoginInputDto = z.infer<typeof loginInputSchema>;
export type IChangePasswordDto = z.infer<typeof changePasswordSchema>;
export type IRegisterInputDto = z.infer<typeof registerInputSchema>;
