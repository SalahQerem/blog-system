import { Router } from "express";
import * as AuthController from "./auth.controller.js";

const router = Router();

router.get("/", AuthController.getAuth);
router.post("/register", AuthController.register);
router.post("/login", AuthController.login);

export default router;
