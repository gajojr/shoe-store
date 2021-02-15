import { config } from 'dotenv';
import path from 'path';
const __dirname = path.resolve();
const envPath = path.join(__dirname, '../../.env');
config({ path: envPath });
import { createConnection } from 'mysql';

const connection = createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

connection.connect(err => {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});

// connection.query('SELECT * FROM porudzbine', function(error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results);
// });

// connection.query('SELECT * FROM kupci', function(error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results);
// });

connection.query('SELECT * FROM patike', function(error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
});

connection.end();