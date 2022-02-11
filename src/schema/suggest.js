const { Schema, model} = require('mongoose');

let suggest = new Schema({
    Guild: String,
    c_id: String,
    old_channel: String,
    suggest_id: Number,
})

module.exports = model('suggest', suggest);
