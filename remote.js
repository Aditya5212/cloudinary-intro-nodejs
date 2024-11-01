// Import and configure dotenv to load environment variables
require("dotenv").config();

// Import the Cloudinary library
const cloudinary = require("cloudinary").v2;

// Generate and log a Cloudinary URL for a remote image, using the fetch type
console.log(cloudinary.url("https://cdn.pixabay.com/photo/2023/10/07/23/39/girl-8301168_1280.png", {type: "fetch"}));