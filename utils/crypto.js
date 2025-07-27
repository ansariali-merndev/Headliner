import crypto from "crypto";

const secretKey = process.env.SECRET_KEY;

export const generateToken = (id, username, email) => {
  const data = `${id}-${username}-${email}`;
  const token = crypto
    .createHmac("sha256", secretKey)
    .update(data)
    .digest("hex");

  return `${token}.${id}`;
};

export const generateOtp = () => {
  return crypto.randomInt(100000, 1000000);
};
