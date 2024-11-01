// Import and configure dotenv to load environment variables
require("dotenv").config();

// Import the Cloudinary library
const cloudinary = require("cloudinary").v2;

// Log the Cloudinary configuration details
console.log(cloudinary.config().cloud_name); // Log the cloud name
console.log(cloudinary.config().api_key);    // Log the API key
console.log(cloudinary.config().api_secret); // Log the API secret