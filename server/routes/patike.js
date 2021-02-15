import express from 'express';
import { getPatike, getPatiku } from '../controllers/patike.js';

const router = express.Router();

router.get('/', getPatike);
router.get('/:id', getPatiku);

export default router;