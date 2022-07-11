const mongoose = require("mongoose");
const { Schema } = mongoose;

const gamecastSchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    url: {
        type: String,
        trim: true
    }
});

const Gamecast = mongoose.model("Gamecast", gamecastSchema);

module.exports = { Gamecast };