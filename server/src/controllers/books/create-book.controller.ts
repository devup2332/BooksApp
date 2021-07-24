import { Request, Response } from "express";
import BooksModel from "../../models/book.model";

export const CreateBook = async (req: Request, res: Response) => {
  const { title, author, photoUrl } = req.body;
    const book = await BooksModel.create({
      title,
      author,
      photoUrl,
    });
    console.log(book)
    return res.status(200).json({
      message: "Book Created",
    });
};
