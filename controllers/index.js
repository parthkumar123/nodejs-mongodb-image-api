"user strict";
const imageSchema = require("../models/index");

async function getImage(req, res) {
    try {
        const image = await imageSchema.findById(req.params.id);
        if (!image) {
            return res.status(404).send({ error: 'Image not found' });
        }
        res.set('Content-Type', image.contentType);
        res.send(image.buffer);
    } catch (error) {
        // Handle errors
        return res.status(500).json({
            message: error.message
        });
    }
}

async function uploadImage(req, res) {
    try {
        // Process each uploaded file
        const uploadedFiles = req.files.map((file, index) => {
            return {
                filename: file.originalname,
                size: file.size,
                contentType: file.mimetype,
                buffer: file.buffer
            };
        });

        // Insert all uploaded files
        let insertedImages = await imageSchema.insertMany(uploadedFiles);
        insertedImages = insertedImages.map((image) => {
            return { _id: image._id, filename: image.filename }
        })

        // Return success message with inserted images details
        res.status(201).send({
            message: 'Image uploaded successfully',
            data: insertedImages
        });
    } catch (error) {
        // Handle errors
        return res.status(500).json({
            message: error.message
        });
    }
}

module.exports = {
    getImage,
    uploadImage,
};
