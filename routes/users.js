import express from "express";

import { signup, login } from "../controllers/register.js";
import { getPosts,likePost,unlikePost,ifAlreadyLiked } from "../controllers/posts.js";

const router = express.Router();

router.post('/createAccount',signup);
router.post('/login',login);
router.get('/getPosts',getPosts);
router.patch('/:id/:email/likePost',likePost);
router.patch('/:id/unlikePost',unlikePost);
router.get('/:id/:email/ifAlreadyLiked', ifAlreadyLiked);

export default router;