import {Router} from "express";
import {CreateBook} from "../controllers/books/create-book.controller";

const router = Router();

router.post('/',CreateBook)

export default router
