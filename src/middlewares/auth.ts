import { Request, Response, NextFunction } from "express";
import passport from "passport";
import { User, IUser } from "../models/User";
export function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  // Attempt to authenticate using JWT first
  passport.authenticate(
    "jwt",
    { session: false },
    (err: any, user: IUser | null, info: any) => {
      if (err) return next(err);
      if (user) {
        req.user = user; // Assign user to request object
        return next();
      }

      // Fallback to session authentication if JWT fails
      if (req.isAuthenticated()) {
        return next();
      }

      // If both methods fail, return an error
      res.status(401).json({ message: "You are not authenticated" });
    }
  )(req, res, next);
}

export function isAdmin(req: Request, res: Response, next: NextFunction): void {
  if (!req.user || ("isAdmin" in req.user && !req.user.isAdmin)) {
    res.status(403).json({ message: "This action requires admin privileges" });
    return;
  }
  next();
}
