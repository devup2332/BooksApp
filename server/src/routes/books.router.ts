import {Router} from "express";
import {CreateBook} from "../controllers/books/create-book.controller";
import { GetBooksByGenre } from "../controllers/books/get-books-by-genre.controller";
import {GetBooks} from "../controllers/books/get-books.controller";

const router = Router();

router.get('/', GetBooks);
router.get('/byGenre/:genreId', GetBooksByGenre);
router.post('/', CreateBook);

export default router
