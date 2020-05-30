var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var SeasonSchema = new Schema({
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

module.exports = mongoose.model('Season', SeasonSchema);