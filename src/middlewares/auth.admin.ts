import asyncHandler from "express-async-handler";
import { Request, Response, NextFunction } from "express";
import { GetUserById } from "../services/user.service";

const RequiredAdminOnly = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const id = req.userId;
  const user = await GetUserById(id);

  if (!user) {
    res.status(401);
    // ! Throw Error if user not found
    throw new Error("User not found");
  }

  if (user.role !== "admin") {
    res.status(403);
    // ! Throw Error if user role is not admin
    throw new Error("Forbidden: Admin only");
  }

  next();
});

export default RequiredAdminOnly;
