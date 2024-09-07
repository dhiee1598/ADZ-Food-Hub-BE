import { UserNewRequest } from "../interfaces/user.props";
import { User } from "../models";

export const GetUserByEmail = async (email: string) => await User.findOne({ where: { email: email } });
export const InsertUser = async (values: UserNewRequest) => await User.create({ ...values, role: "user" });
export const GetUserById = async (id: string) => await User.findByPk(id);
