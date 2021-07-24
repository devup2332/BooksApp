import { Request, Response } from "express";
import Books from "../../models/book.model";

export const GetBooks = async (req: Request, res: Response) => {
  const books = await Books.findAll();
  return res.status(200).json({ books });
};
