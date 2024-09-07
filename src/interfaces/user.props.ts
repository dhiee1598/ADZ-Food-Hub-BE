import { CreationOptional, InferAttributes, InferCreationAttributes, Model } from "sequelize";

export interface UserAttributes
  extends Model<InferAttributes<UserAttributes>, InferCreationAttributes<UserAttributes>> {
  userId: CreationOptional<string>;
  name: string;
  email: string;
  password: string;
  role: string;
}

export interface UserNewRequest extends Omit<UserAttributes, "userId" | "role"> {}

export interface UserAuthRequest extends Omit<UserAttributes, "userId" | "role" | "name"> {}

export interface UserResponse {
  message?: string;
  user?: UserAttributes;
  accessToken?: string;
}
