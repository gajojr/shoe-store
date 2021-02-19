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
    try {
        CommentsModel.find({}, (err, docs) => {
            if (err) return err;
            res.send({ comments: docs });
        });
    } catch (err) {
        console.log(err);
    }
}