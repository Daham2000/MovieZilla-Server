import express from "express";

import { signup, login } from "../controllers/register.js";
import { getPosts,likePost } from "../controllers/posts.js";

const router = express.Router();

router.post('/createAccount',signup);
router.post('/login',login);
router.get('/getPosts',getPosts);
router.patch('/:id/likePost',likePost);

export default router;