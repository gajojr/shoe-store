import express from 'express';
import { getComments } from '../controllers/komentari.js';

const router = express.Router();
router.get('/', getComments);

export default router;