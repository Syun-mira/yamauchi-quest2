const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 1,
        max: 10,
    },
    score: {
        type: Number,
    },
},

{timestamps: true}
);

module.exports = mongoose.model("User", UserSchema);