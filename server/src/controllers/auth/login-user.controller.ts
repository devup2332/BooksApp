import { Request, Response } from "express";

export default (req: Request, res: Response) => {
  return res.json({
    message: "Login user successfully",
  });
};
