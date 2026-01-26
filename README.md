# Simple Social App (Backend)

A small backend project built using **Node.js**, **Express**, and **MongoDB** to practice
authentication and CRUD operations.

This project focuses on **backend fundamentals** rather than deployment or UI polish.

---

## 🚀 Features

- User authentication (Signup / Login / Logout)
- JWT-based authentication using cookies
- Create, read, update, and delete posts
- Like / unlike posts
- User–post relationship handling
- Server-side rendering with EJS
- Environment variable management using `.env`

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT (JSON Web Tokens)
- bcrypt
- EJS
- dotenv

---

## 📁 Project Type

> ⚠️ Backend-focused learning project
>
> ⚙️ Running Locally

### 1️⃣ Clone the repository

git clone https://github.com/KajalSingh-17/simple-social-app.git
cd simple-social-app

### 2️⃣ Install dependencies
npm install

### 3️⃣ Create a .env file
Create a .env file in the root directory and add:
(##EXAMPLE)
PORT=3000
JWT_SECRET=your_secret_key
MONGO_URI=mongodb://127.0.0.1:27017/simple-social-app

### 4️⃣ Start MongoDB

Make sure MongoDB is running locally:

mongod

### 5️⃣ Start the server
npm start

🧪 Learning Outcomes

- This project helped me understand:

- Express routing and middleware

- Authentication using JWT and cookies

- Secure password hashing

- MongoDB schema design and relationships

- Environment variable management

- Backend project structure

📌 Notes

- This is a learning project, not a production application

- Server-side rendered views using EJS templates

- Deployment was intentionally skipped due to project scope
