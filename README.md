## Image Upload and Download API with Express.js and MongoDB

This repository contains a RESTful API built with Express.js and MongoDB that allows users to upload and download images. The API provides endpoints for uploading images and fetching images by their unique IDs.

### Features

- **Image Upload**: Users can upload images to the server via the `/image/upload` endpoint. Images are stored in MongoDB using GridFS for efficient storage of large binary data.
- **Image Download**: Users can fetch images by their unique IDs via the `/image/:id` endpoint. The API serves the stored images to clients upon request.
- **Asynchronous Processing**: The API handles image upload and download operations asynchronously to ensure optimal performance and responsiveness.
- **Error Handling**: Comprehensive error handling ensures that the API provides informative error messages and gracefully handles various types of errors.
- **Scalability**: The architecture is designed to be scalable, allowing the system to handle large volumes of image uploads and downloads efficiently.

### APIs

- **Image Upload Endpoint**: `POST /image/upload`
  - Allows users to upload images to the server.
  - Request body should include the image file to be uploaded.
  - Returns a success message upon successful upload.

- **Image Download Endpoint**: `GET /image/:id`
  - Allows users to fetch images by their unique IDs.
  - Requires the ID of the image to be provided as a parameter.
  - Returns the requested image to the client.

### Technologies Used

- Express.js: Fast, unopinionated, minimalist web framework for Node.js.
- MongoDB: NoSQL database used for storing image data.
- Multer: Middleware for handling file uploads in Express.js.
- Mongoose: MongoDB object modeling tool designed to work in an asynchronous environment.
- Node.js: JavaScript runtime environment for building server-side applications.

### Usage

To use this API, clone the repository and install dependencies:

```
git clone https://github.com/parthkumar123/nodejs-mongodb-image-api.git
cd nodejs-mongodb-image-api
npm install
```

Ensure that MongoDB is running on your local machine or update the MongoDB connection URI in the env file to connect to your MongoDB instance.

Start the server:

```
npm start
```

The API will be accessible at `http://localhost:3000`.

Note : To upload Images, request body should be of type form-data and Key should be images.
