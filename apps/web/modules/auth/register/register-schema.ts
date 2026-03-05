import { z } from "zod";

export const registerSchema = z.object({
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
  age: z
    .number()
    .int("Age must be an integer.")
    .min(1, "Age must be at least 1.")
    .max(120, "Age must be at most 120."),
  email: z.string().email("Invalid email address."),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters.")
    .max(64, "Password must be at most 64 characters."),
});
export type RegisterSchema = z.infer<typeof registerSchema>;