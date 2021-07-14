import { Router } from "express";
import LoginUser from "../controllers/auth/login-user.controller";

const router = Router();

router.post("/login", LoginUser);

export default router;
