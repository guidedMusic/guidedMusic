const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const GenreSchema = new Schema({
    list: {
        type: [String]
    }
});




const Genre = mongoose.model('Genre', GenreSchema);


module.exports = Genre;