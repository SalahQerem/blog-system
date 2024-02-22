import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";
import blogModel from "./blog.user.js";

const userModel = sequelize.define(
  "User",
  {
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
    confimEmail: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    age: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: true,
  }
);
userModel.hasMany(blogModel, {
  onDelete: "CASCADE",
});
blogModel.belongsTo(userModel);

export default userModel;
