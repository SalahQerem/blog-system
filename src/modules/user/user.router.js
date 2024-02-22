import { Router } from "express";
import * as UserController from "./user.controller.js";

const router = Router();

router.get("/", UserController.getUser);
router.patch("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);

export default router;
