import { Router } from "express";
import AuthRouter from "./auth.router";
import BooksRouter from "./books.router";

const router = Router();

router.use("/auth", AuthRouter);
router.use("/books",BooksRouter)

export default router;
