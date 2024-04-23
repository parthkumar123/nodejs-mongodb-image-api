"use strict";
const mongoose = require("mongoose")

const imageSchema = new mongoose.Schema({
    filename: String,
    size: Number,
    contentType: String,
    buffer: Buffer
}, { timestamps: true });

module.exports = mongoose.model('Images', imageSchema);