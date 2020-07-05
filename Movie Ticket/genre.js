let mongoose = require("mongoose");

let genreSchema = mongoose.Schema({

    name:{
        type:String, required: true
    }
});

let Genre = mongoose.model("genres",genreSchema);

module.exports ={Genre, genreSchema}