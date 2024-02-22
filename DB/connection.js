import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("blog-system", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export const connectDB = async () => {
  try {
    return await sequelize.sync();
    // return await sequelize.sync({ alter: true });
  } catch (error) {
    console.log(`error: ${error}`);
  }
};
