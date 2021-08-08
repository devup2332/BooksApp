import { Request, Response } from "express";
import { Sequelize } from "sequelize";
import Books from "../../models/book.model";
import Favorites from "../../models/favorite.model";

export const GetTopBooks = async (req: Request, res: Response): Promise<Response> => {
    const {limit = 9}: any = req.query;

    const items = await Books.findAll({
        attributes: [
            'id',
            'author',
            'photoUrl',
            'title',
            [Sequelize.fn('COUNT', Sequelize.col('Books.id')), 'quantity'],
        ],
        include: [{
            model: Favorites,
            required: true,
            attributes: [],
            as: 'favorites',
        }],
        group: ['author', 'photoUrl', 'title', 'Books.id'],
        order: [[Sequelize.fn('COUNT', Sequelize.col('Books.id')), 'DESC']]
    });

    const topBooks = items.slice(0, limit);

    const topBooksLength = topBooks.length;

    return res.json({
        count: topBooksLength,
        rows: topBooks
    });
}