"use strict";
// Purpose: Handle all routes related to images.
const express = require("express");
const router = express.Router();

const {
    uploadImage,
    getImage,
} = require("../controllers/index");

router.route("/:id")
    .get(getImage);

router.route("/")
    .post(uploadImage);


module.exports = router;