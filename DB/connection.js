import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "freedb_blog-system-db",
  "freedb_salahuser",
  "WW4G8KzmJYWYs$u",
  {
    host: "sql.freedb.tech",
    port: 3306,
    dialect: "mysql",
  }
);

export const connectDB = async () => {
  try {
    return await sequelize.sync();
    // return await sequelize.sync({ alter: true });
  } catch (error) {
    console.log(`error: ${error}`);
  }
};
