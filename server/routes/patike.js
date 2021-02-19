import express from 'express';
import { getPatike, getMuskePatike, getZenskePatike, getDecjePatike } from '../controllers/patike.js';

const router = express.Router();

router.get('/', getPatike);
router.get('/muske-patike', getMuskePatike);
router.get('/zenske-patike', getZenskePatike);
router.get('/decje-patike', getDecjePatike);
// router.get('/:id', getPatiku);

export default router;