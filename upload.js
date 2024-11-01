// Import and configure dotenv to load environment variables
require("dotenv").config();

// Import the Cloudinary library
const cloudinary = require("cloudinary").v2;

// cloudinary.uploader.upload("./assets/nq5r9.jpg")
// .then(result => {console.log(result)})
// .catch(error => {console.log(error)});


// cloudinary.uploader.upload("./assets/-no-otoshimono-ikaros-anime-girls-astraea-desktop-1920x1080-wallpaper-l-a-ibackgroundz.com.jpg",{
//     resource_type: "auto",  
// })
// .then(result => {console.log(result)})
// .catch(error => {console.log(error)});

// cloudinary.uploader.upload("./assets/5550655+_54c611b1362a5bbb27715c2f8111df62.jpg",{
//     resource_type: "auto",
//     public_id: "Anime Girl" 
// })
// .then(result => {console.log(result)})
// .catch(error => {console.log(error)});

// cloudinary.uploader.upload("./assets/blackcherry.TTF",{
//     resource_type: "raw",
//     use_filename: true,
//     unique_filename: true
// })
// .then(result => {console.log(result)})
// .catch(error => {console.log(error)});


// Upload an image to Cloudinary
cloudinary.uploader.upload("./assets/nq5r9.jpg", {
    folder: 'myfolder',      // Specify the folder to upload to
    resource_type: "auto",   // Automatically detect the resource type
    public_id: "Anime Girl", // Set the public ID for the uploaded image
})
.then(result => {console.log(result)})  // Log the result if upload is successful
.catch(error => {console.log(error)});  // Log any errors that occur during upload

// Note: There are several