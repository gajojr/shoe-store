import { config } from 'dotenv';
import path from 'path';
const __dirname = path.resolve();
const envPath = path.join(__dirname, '../.env');
config({ path: envPath });

import mongoose from 'mongoose';

const connection = await mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

export default connection;