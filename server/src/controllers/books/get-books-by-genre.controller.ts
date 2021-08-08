import { Request, Response } from "express";
import AssignedGenres from "../../models/assigned-genre.model";
import Books from "../../models/book.model";

export const GetBooksByGenre = async (req: Request, res: Response): Promise<Response> => {
    const { page = 1, limit = 10 }: any = req.query;
    const { genreId } = req.params;

    const offset = (page > 0 ? page-1 : 0) * limit;

    const items = await Books.findAndCountAll({
        offset,
        limit,
        include: [{
            model: AssignedGenres,
            required: true,
            as: 'assigned_genres',
            where: {
                genreId
            }
        }],
        order: [['id', 'DESC']]
    });

    return res.json(items);
}