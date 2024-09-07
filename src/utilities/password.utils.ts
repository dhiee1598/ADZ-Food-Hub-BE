import bcrypt from "bcrypt";

// * Hash Password Function
export const HashPassword = async (password: string) => await bcrypt.hash(password, 10);

// * Validated Password Function
export const IsValidPassword = async (password: string, hashPass: string) =>
  await bcrypt.compare(password, hashPass);
