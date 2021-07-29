import {Router} from "express";
import {CreateBook} from "../controllers/books/create-book.controller";
import {GetBooks} from "../controllers/books/get-books.controller";

const router = Router();

router.get('/',GetBooks)
router.post('/',CreateBook)

export default router
