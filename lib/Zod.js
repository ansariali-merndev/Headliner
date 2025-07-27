import { z } from "zod";

export const authenticationSchema = (isLogin) => {
  return z.object({
    username: isLogin
      ? z.string().optional()
      : z
          .string()
          .min(3, { message: "Username must be at least 3 characters long." })
          .max(15, { message: "Username must not exceed 15 characters." }),

    email: z.email(),

    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long." })
      .max(12, { message: "Password must not exceed 12 characters." })
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/, {
        message:
          "Password must include at least one uppercase letter, one lowercase letter, and one number.",
      }),
  });
};
