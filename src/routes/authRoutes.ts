import express from "express";
import passport from "passport";

const router = express.Router();

/**
 * @swagger
 * /auth/google:
 *   get:
 *     summary: Redirect to Google OAuth login
 *     tags: [Authentication]
 *     responses:
 *       302:
 *         description: Redirect to Google OAuth login page
 */

/**
 * @swagger
 * /auth/google/callback:
 *   get:
 *     summary: Google OAuth callback URL
 *     tags: [Authentication]
 *     responses:
 *       302:
 *         description: Successful authentication, redirect home
 *       401:
 *         description: Authentication failed, redirect to login
 */

// Google OAuth login
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Google OAuth callback
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    res.redirect("/");
  }
);

export default router;
