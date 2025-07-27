import bcrypt from "bcrypt";

export const verifyPassword = async (password, encrypted) => {
  return await bcrypt.compare(password, encrypted);
};

export const hashedPassword = async (password) => {
  const saltRound = 10;
  return await bcrypt.hash(password, saltRound);
};
