const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Dep = new Schema({
        icao: String,
        name_airline: String,
        login: String,
        type : String,
        application: String,
        departus: Date,
        return: {type: Date, default: Date.now},
        td: Number,
        tt: Number
})

module.exports = mongoose.model('Dep', Dep);
