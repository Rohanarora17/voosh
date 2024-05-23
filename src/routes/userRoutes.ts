import express from "express";
import * as userController from "../controllers/userController";
import { isAuthenticated, isAdmin } from "../middlewares/auth";
import { registerValidator, loginValidator } from "../middlewares/validators";
const router = express.Router();

router.post("/register", registerValidator, userController.register);
router.post("/login", loginValidator, userController.login);
router.get("/logout", userController.logout);
router.get("/profile/:id", isAuthenticated, userController.getProfile);
router.put("/profile/:id", isAuthenticated, userController.updateProfile);
router.get("/public-profiles", userController.listPublicProfiles);
router.get("/user-profiles", isAdmin, userController.listAllProfiles);
export default router;
