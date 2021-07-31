import { Request, Response } from "express";
import Genres from "../../models/genre.model";

export const CreateGenre = async (req: Request, res: Response) => {
  const { name } = req.body;
  const genre = await Genres.create({name});

    return res.json({
      message: "Genre Created",
      data: genre
    });
};
