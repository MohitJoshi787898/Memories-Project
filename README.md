Welcome to the README file for the MERN (MongoDB, Express, React, Node.js) Image Sharing Web Application!

Introduction
This web application is designed to allow users to upload, view and download images.
The application is built using MERN stack.
Users can register an account, login, and start uploading their images.
Once uploaded, users can view and download other user's images as well.

Installation and Setup
Clone the repository from Github.
Open the project in your preferred code editor.
Navigate to the client directory and run npm install to install the dependencies for the frontend.
Navigate to the server directory and run npm install to install the dependencies for the backend.
Create a .env file in the server directory and add the following variables:
makefile
```bash
  MONGODB_URI=<your_mongodb_uri>
  CLOUDINARY_NAME=<your_cloudinary_name>
  CLOUDINARY_API_KEY=<your_cloudinary_api_key>
  CLOUDINARY_API_SECRET=<your_cloudinary_api_secret>
  JWT_SECRET=<your_jwt_secret>
 ```
  
Start the server by running npm start in the server directory.
Start the client by running npm start in the client directory.
Usage
Navigate to http://localhost:3000 to access the application.
Register an account using your email and password.
Login to your account.
Click on the Upload Image button to upload an image.
View and download other user's images by clicking on them.
Logout of your account.
Technologies Used
MongoDB
Express.js
React.js
Node.js
Cloudinary
JWT
Future Improvements
Add image commenting feature
Add image like/dislike feature
Add user profile page
Add image search functionality
Credits
This application was developed by Mohit Joshi as a personal project. Feel free to use and modify it for your own purposes.
