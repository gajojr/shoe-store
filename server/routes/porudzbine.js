import express from 'express';
import { trenutnePorudzbine, novaPorudzbina } from '../controllers/porudzbine.js';

const router = express.Router();

router.get('/', trenutnePorudzbine);
router.post('/', novaPorudzbina);

export default router;