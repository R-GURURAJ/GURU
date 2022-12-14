const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    date: {
        type: Date,
        default: Date.now
    }
});

mongoose.Schema({
    username: String,
    password: String,
})

module.exports = mongoose.model('posts', postSchema);