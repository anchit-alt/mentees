// Define each model in a seperate file
// This file can be renamed to fit the model name
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        name:{
            type:String,
            required:true,
        },
        notes:{
            type:String,
            required:true,
        },

    },
    {timestamps:true}
);


module.exports = mongoose.model("Workout",workoutSchema);