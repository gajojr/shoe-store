import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';

import patikeRoutes from './routes/patike.js';
import korisniciRoutes from './routes/korisnici.js';
import porudzbineRoutes from './routes/porudzbine.js';
import commentRoutes from './routes/comments.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json({
    extended: true
}));
app.use(cors());
if (process.env.NODE_ENV === 'PRODUCTION') {
    app.use(helmet());
}

app.use('/patike', patikeRoutes);
app.use('/korisnici', korisniciRoutes);
app.use('/porudzbine', porudzbineRoutes);
app.use('/comments', commentRoutes);

app.listen(PORT);