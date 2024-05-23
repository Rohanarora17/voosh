import express from "express";
import * as userController from "../controllers/userController";
import { isAuthenticated, isAdmin } from "../middlewares/auth";
import { registerValidator, loginValidator } from "../middlewares/validators";
const router = express.Router();
/**
 * @swagger
 * /api/users/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - email
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: User already exists
 */
router.post("/register", registerValidator, userController.register);

/**
 * @swagger
 * /api/users/login:
 *   post:
 *     summary: Login a user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Authentication successful
 *       401:
 *         description: Invalid credentials
 */

/**
 * @swagger
 * /api/users/logout:
 *   get:
 *     summary: Logout the user
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Logged out successfully
 */

/**
 * @swagger
 * /api/users/profile/{id}:
 *   get:
 *     summary: Retrieve a user's profile by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The user ID
 *     responses:
 *       200:
 *         description: User profile retrieved successfully
 *       404:
 *         description: User not found
 */

/**
 * @swagger
 * /api/users/profile/{id}:
 *   put:
 *     summary: Update a user's profile by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The user ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               photo:
 *                 type: string
 *               bio:
 *                 type: string
 *               phone:
 *                 type: string
 *     responses:
 *       200:
 *         description: User profile updated successfully
 *       404:
 *         description: User not found
 */

/**
 * @swagger
 * /api/users/public-profiles:
 *   get:
 *     summary: Retrieve all public profiles
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: List of public profiles
 */

/**
 * @swagger
 * /api/users/user-profiles:
 *   get:
 *     summary: Retrieve all user profiles (admin only)
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: List of all user profiles
 *       403:
 *         description: Forbidden
 */
router.post("/login", loginValidator, userController.login);

router.get("/logout", userController.logout);
router.get("/profile/:id", isAuthenticated, userController.getProfile);
router.put("/profile/:id", isAuthenticated, userController.updateProfile);
router.get("/public-profiles", userController.listPublicProfiles);
router.get("/user-profiles", isAdmin, userController.listAllProfiles);
export default router;
