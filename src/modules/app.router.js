import { connectDB } from "../../DB/connection.js";
import authRouter from "./auth/auth.router.js";
import blogRouter from "./blog/blog.router.js";
import userRouter from "./user/user.router.js";

export const initApp = (app, express) => {
  connectDB();
  app.use(express.json());
  app.use("/user", userRouter);
  app.use("/blog", blogRouter);
  app.use("/auth", authRouter);
  app.use("/", (req, res) => {
    return res.json({ message: "Welcome11" });
  });
  app.use("*", (req, res) => {
    return res.json({ message: "page not found" });
  });
};
