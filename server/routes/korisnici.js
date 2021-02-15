import express from 'express';
import { getKorisnika, registrujKorisnika } from '../controllers/korisnici.js';

const router = express.Router();

router.get('/:id', getKorisnika);
router.post('/', registrujKorisnika);

export default router;