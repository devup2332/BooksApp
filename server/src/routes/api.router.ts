import { Router } from "express";
import AuthRouter from "./auth.router";
import BooksRouter from "./books.router";
import GenresRouter from "./genres.router";

const router = Router();

router.use("/auth", AuthRouter);
router.use("/books", BooksRouter);
router.use("/genres", GenresRouter);

export default router;
