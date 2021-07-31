import { Request, Response } from "express";
import Genres from "../../models/genre.model"

export const GetGenders = async (req: Request, res: Response): Promise<Response> => {
    const items = await Genres.findAll();
    return res.json(items);
}