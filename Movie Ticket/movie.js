let mongoose = require("mongoose");
let G = require("./genre");

let MovieSchema = mongoose.Schema(
    {
        name: {type: String, min:4, max: 100, required: true},
        actor: {type: String, min:4, max: 100, required: true},
        price: {type: Number, required: true},
        stocks: {type: Number, required: true},
        genre: G.genreSchema

    }
);

let Movie = mongoose.model("movies",MovieSchema);

module.exports = {Movie,MovieSchema}