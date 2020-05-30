var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ExerciseSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    products: {

    }
});

module.exports = mongoose.model('Exercise', ExerciseSchema);