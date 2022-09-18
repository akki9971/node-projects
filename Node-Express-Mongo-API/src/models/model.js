const mongoose = require('mongoose');
const { Schema } = mongoose;
const { model } = mongoose

const MensSchema = new Schema({
    event:{
        type: String,
        default: '100m'
    },
    name:{
        type: String,
        required: true,
        trim: true
    },
    rank:{
        type: Number,
        required: true,
        unique: true
    },
    dob:{
        type: Date,
        required: true,
        trim: true
    },
    country:{
        type: String,
        required: true,
    }

})

MensSchema.virtual('originated').get(()=> this.name + " " + this.country )

// creates or modifies a collection in database
const MensModel = new model("Mens100mRecords", MensSchema)

module.exports = MensModel