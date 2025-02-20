import { Router } from "express";
import { GetAllLinksInTweets, GetAllTweets, GetTweetById } from "../controllers/tweetController";

const router = Router();

router.get('/links/:id?', GetAllLinksInTweets); 
router.get('/:id', GetTweetById);
router.get('/', GetAllTweets);


export default router;