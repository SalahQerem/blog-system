import { Op } from "sequelize";
import blogModel from "../../../DB/model/blog.user.js";
import userModel from "../../../DB/model/user.model.js";

export const getUser = async (req, res) => {
  try {
    const users = await userModel.findAll({
      include: blogModel,
      where: {
        age: {
          [Op.gte]: 20,
        },
      },
    });
    return res.json({ message: "success", users });
  } catch (error) {
    return res.json({ message: "error", error });
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { password } = req.body;
  try {
    const user = await userModel.update({ password }, { where: { id } });
    if (user[0] == 0) {
      return res.json({ message: "User not found" });
    }
    return res.json({ message: "success", user });
  } catch (error) {
    return res.json({ message: "error", error: error.stack });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userModel.destroy({
      where: {
        id,
      },
    });
    if (!user) {
      return res.json({ message: "User not found" });
    }
    return res.json({ message: "success", user });
  } catch (error) {
    return res.json({ message: "error", error: error.stack });
  }
};
