"use server";

import { connectDB } from "@/lib/dbConfig";
import { authenticationSchema } from "@/lib/Zod";
import { userDB } from "@/model/user.model";
import { hashedPassword, verifyPassword } from "@/utils/bcrypt";
import { generateToken } from "@/utils/crypto";
import { cookies } from "next/headers";
import { z } from "zod";

export async function authAction(_, formdata) {
  const cookieStore = await cookies();
  const isLogin = formdata.get("isLogin") == "true";

  const userdata = {
    username: isLogin ? "" : formdata.get("username"),
    email: formdata.get("email"),
    password: formdata.get("password"),
  };

  const { success, data, error } =
    authenticationSchema(isLogin).safeParse(userdata);

  if (!success) {
    const zodErr = z.flattenError(error).fieldErrors;
    const err = zodErr?.username || zodErr?.email || zodErr?.password;
    return { success: false, message: err };
  }

  await connectDB();
  const { username, email, password } = data;

  let user = await userDB.findOne({ email });
  if (isLogin) {
    if (!user) {
      return {
        success: false,
        message: "Invalid Credential! Your email or password is wrong",
      };
    }
    const isMatchPass = await verifyPassword(password, user.password);
    if (!isMatchPass) {
      return {
        success: false,
        message: "Invalid Credential! Your email or password is wrong",
      };
    }
  } else {
    if (user) {
      return {
        success: false,
        message: "User Account already exist, Please login to continue",
      };
    }

    const hashedPas = await hashedPassword(password);

    user = new userDB({
      username,
      email,
      password: hashedPas,
    });
    await user.save();
  }

  const token = generateToken(user._id, user.username, user.email);
  cookieStore.set("auth_token", token);

  return { success: true, message: "Login or Register Successfully" };
}
