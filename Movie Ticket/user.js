let mongoose = require("mongoose");
let M = require("./movie")

let schema = mongoose.Schema({

    name:{
        type:String, required: true
    },
    movie:{
        type:M.MovieSchema, required: true
    }
});

let Users = mongoose.model("ticket_holder",schema);

module.exports =Users;