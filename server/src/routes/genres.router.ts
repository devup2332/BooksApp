import { Router } from "express";
import { CreateGenre } from "../controllers/genres/create-genre.controller";
import { GetGenders } from "../controllers/genres/get-genres.controller";

const router = Router();

router.get('/', GetGenders);
router.post('/', CreateGenre);

export default router;