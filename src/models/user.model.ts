import { DataTypes } from "sequelize";
import { UserAttributes } from "../interfaces/user.props";
import sequelize from "../utilities/sequelize";

const User = sequelize.define<UserAttributes>(
  "User",
  {
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "user",
    modelName: "User",
    timestamps: false,
  }
);

User.prototype.toJSON = function (): UserAttributes {
  return {
    ...this.get(),
    password: undefined,
  };
};

export default User;
