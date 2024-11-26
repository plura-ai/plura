import { z } from "zod";
import { Profanity } from "profanity-validator";
const profanity = new Profanity({
  customWords: ["badword", "inappropriate"],
  heat: 0.9,
});
const profanityCheck = async (value: string) => {
  const result = await profanity.validateField(value);
  return result.isValid;
};
export const signInSchema = z.object({
  email: z.string().email("You must give a valid email"),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

export const signUpSchema = z
  .object({
    firstName: z
      .string()
      .min(1)
      .refine(async (val) => await profanityCheck(val), {
        message: "Inappropriate name ",
      }),
    lastName: z
      .string()
      .min(1)
      .refine(async (val) => await profanityCheck(val), {
        message: "Inappropriate name",
      }),
    email: z.string().email("You must give a valid email"),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" })
      .refine(
        (value) =>
          /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{}|;:'",.<>?/]*$/.test(value ?? ""),
        "Password should contain only alphabets, numbers, and special characters",
      )
      .refine(async (val) => await profanityCheck(val), {
        message: "Inappropriate password",
      }),
    confirmPassword: z.string().min(6),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type signInType = z.infer<typeof signInSchema>;
export type signUpType = z.infer<typeof signUpSchema>;
