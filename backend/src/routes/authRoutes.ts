import { Router } from "express";
import { signUp, login, getMe } from "../controllers/authController.js";

const router = Router();

// POST /auth/signup - Register new user
router.post("/signup", signUp);

// POST /auth/login - Login and get token
router.post("/login", login);

// GET /auth/me - Get current user (requires token)
router.get("/me", getMe);

export default router;
