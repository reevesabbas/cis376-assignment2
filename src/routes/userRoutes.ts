import { Router } from "express";
import { GetTwitterUser } from "../controllers/userController";

const router = Router();

router.get('/:screen_name', GetTwitterUser);


export default router;