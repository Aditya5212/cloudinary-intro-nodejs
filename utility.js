// Import and configure dotenv to load environment variables
require("dotenv").config();

// Import the Cloudinary library
const cloudinary = require("cloudinary").v2;

// Generate and log a URL for an image in the "myfolder" folder with the name "Anime Girl"
console.log(cloudinary.url("myfolder/Anime Girl"));

// Generate and log a URL for an image in the "myfolder" folder with the name "Anime_Girl_101"
console.log(cloudinary.url("myfolder/Anime_Girl_101"));

// Generate and log an HTML img tag for an image in the "myfolder" folder with the name "Anime_Girl_101"
console.log(cloudinary.image("myfolder/Anime_Girl_101"));