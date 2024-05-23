import { check } from "express-validator";

export const registerValidator = [
  check("username").not().isEmpty().withMessage("Username is required"),
  check("email").isEmail().withMessage("Valid email is required"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
];

export const loginValidator = [
  check("email").isEmail().withMessage("Valid email is required"),
  check("password").not().isEmpty().withMessage("Password is required"),
];
