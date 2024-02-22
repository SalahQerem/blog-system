import blogModel from "../../../DB/model/blog.user.js";
import userModel from "../../../DB/model/user.model.js";

export const getBlog = async (req, res) => {
  try {
    const blogs = await blogModel.findAll({
      include: {
        model: userModel,
        attributes: ["id", "name"],
      },
      attributes: {
        exclude: ["UserId", "updatedAt"],
      },
    });
    return res.json({ message: "success", blogs });
  } catch (error) {
    return res.json({ message: "error", error });
  }
};

export const addBlog = async (req, res) => {
  const { title, body, UserId } = req.body;
  try {
    const blog = await blogModel.create({ title, body, UserId });
    return res.json({ message: "success", blog });
  } catch (error) {
    return res.json({ message: "error", error: error.stack });
  }
};
