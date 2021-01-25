import express from "express";

import { signup, login } from "../controllers/register.js";

const router = express.Router();

router.post('/createAccount',signup);
router.post('/login',login);

export default router;