import userModel from "../../../DB/model/user.model.js";

export const getAuth = (req, res) => {
  return res.json({ message: "Auth" });
};

export const register = async (req, res) => {
  const { name, email, password, age } = req.body;
  try {
    const user = await userModel.create({ name, email, password, age });
    return res.json({ message: "success", user });
  } catch (error) {
    if (error.original?.errno == 1062) {
      return res.json({ message: "Email already exists" });
    }
    return res.json({ message: "error", error: error.stack });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const checkUser = await userModel.findOne({
      attributes: ["id", "name"],
      where: {
        email,
        password,
      },
    });
    if (!checkUser) {
      return res.json({ message: "Email or Password is invalid" });
    }
    return res.json({ message: "success", user: checkUser });
  } catch (error) {
    return res.json({ message: "error", error: error.stack });
  }
};
