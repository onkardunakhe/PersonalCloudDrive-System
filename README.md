# 🌥️ Personal Cloud Drive System

A full-stack cloud storage web application that allows users to register, log in, and securely upload, view, and delete their personal files — just like a private cloud-based Google Drive alternative.

---

## 🧩 Problem Statement

Most users rely on third-party platforms to store and access personal files. This raises concerns about **data privacy**, **storage limitations**, and **lack of control**. There is a growing need for a simple, private, and self-hosted cloud solution where users have complete ownership of their files.

---

## 💡 Solution Architecture

The **Personal Cloud Drive System** provides:

- **User Authentication**: JWT-secured registration and login.
- **Cloud File Upload**: Files are uploaded directly to **Cloudinary**, a reliable and scalable cloud storage platform.
- **File Management**:
  - View all previously uploaded files
  - Delete files securely
  - Upload new files with validations
- **Access Control**: Each user can manage only their own files.
- **Responsive UI**: Built with Vue.js for a modern, interactive experience.

---

## 🔧 Tech Stack

### 🖥️ Frontend:
- HTML, CSS, JavaScript
- [Vue.js](https://vuejs.org/)

### 🛠️ Backend:
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Cloudinary](https://cloudinary.com/) (for file upload and storage)
- [Multer](https://github.com/expressjs/multer) (for initial file handling)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)

### 📦 Others:
- bcrypt (for hashing passwords)
- JSON Web Tokens (JWT) for authentication
- dotenv for environment variables
- nodemon for development

---

## 🚀 Features

- 🔐 Secure user registration and login using JWT
- ☁️ Upload files directly to **Cloudinary**
- 📜 View list of uploaded files
- 🗑️ Delete uploaded files (also removed from Cloudinary)
- ⚙️ Environment-based configuration
- 👤 User-specific file access only

---
## 🔐 Environment Variables (`.env`)

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

 ✨ Future Improvements

- 📥 Drag-and-drop file upload  
- 📂 Folder organization  
- 🔍 File search & filters  
- 🔐 Two-factor authentication (2FA)  
- 🌍 Cloudinary transformations for images/videos  

🙋‍♂️ Author
Onkar Dunakhe  
📧 onkardunakhe1@gmail.com  
🔗 [www.linkedin.com/in/onkar-dunakhe](https://www.linkedin.com/in/onkar-dunakhe)

