import mongoose from 'mongoose';
import connection from '../modals/database.js';

const Schema = mongoose.Schema;

const ShoeSchema = new Schema({
    brand: String,
    sex: String,
    age: String,
    typeOfShoe: String,
    nameOfShoe: String,
    availableSizes: Array,
    price: Number,
    imgAddresses: Array
});

const ShoeModel = mongoose.model('shoes', ShoeSchema);

export const getPatike = (req, res) => {
    try {
        ShoeModel.find({}, (err, docs) => {
            if (err) return err;
            res.send({ comments: docs });
        });
    } catch (err) {
        console.log(err);
    }
}

export const getMuskePatike = (req, res) => {
    try {
        ShoeModel.find({ sex: "male", age: "grown" }, (err, docs) => {
            if (err) return err;
            res.send({ comments: docs });
        });
    } catch (err) {
        console.log(err);
    }
}

export const getZenskePatike = (req, res) => {
    try {
        ShoeModel.find({ sex: "female", age: "grown" }, (err, docs) => {
            if (err) return err;
            res.send({ comments: docs });
        });
    } catch (err) {
        console.log(err);
    }
}

export const getDecjePatike = (req, res) => {
    try {
        ShoeModel.find({ age: "child" }, (err, docs) => {
            if (err) return err;
            res.send({ comments: docs });
        });
    } catch (err) {
        console.log(err);
    }
}

// export const getPatiku = (req, res) => {
//     const idPatike = req.params.id;
//     res.send(idPatike);
// }