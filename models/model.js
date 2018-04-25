const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Todo = new Schema({
        login: String,
        password: String,
        NumberPosition: Number,
        site: String
})

module.exports = mongoose.model('Todo', Todo);
