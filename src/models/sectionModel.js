const mongoose = require("mongoose");

const SectionModel = mongoose.model(
    "livre",
    {
        _id: {
            type: Number,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        next:[]
    },
    "section"
);

module.exports = {SectionModel}; 