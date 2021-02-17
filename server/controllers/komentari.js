import mongoose from 'mongoose';
import connection from '../modals/database.js';

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    creator: String,
    body: String,
    date: {
        type: Date,
        default: Date.now
    }
});

const CommentsModel = mongoose.model('comment', CommentSchema);

export const getComments = (req, res) => {
    console.log('Usao sam');

    try {
        console.log('Usao sam 1');

        CommentsModel.find({}, (err, docs) => {
            if (err) return err;
            res.send({ comments: docs });
        });
    } catch (err) {
        console.log('Usao sam 3');
        console.log(err);
    }
}