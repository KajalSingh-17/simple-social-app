# Simple Social App (Backend)

A small backend project built using Node.js, Express, and MongoDB to practice
authentication and CRUD operations. This project focuses on backend fundamentals
rather than deployment or UI polish.

---

## 🚀 Features

- User authentication (Signup / Login / Logout)
- JWT-based authentication using cookies
- Create, read, update, and delete posts
- Like / unlike posts
- User–post relationship handling
- Server-side rendering using EJS
- Environment variable management using `.env`

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT (JSON Web Tokens)
- bcrypt
- EJS (server-side templating)
- dotenv

---

## 📁 Project Type

Backend-focused learning project.  
Not deployed, as it requires a Node.js runtime, MongoDB, and environment variables.

---

### Local Development Setup

** 1. Clone the repository **
```bash
git clone https://github.com/KajalSingh-17/simple-social-app.git
cd simple-social-app
```

** 2. Install dependencies **
```bash
npm install
```

** 3. Create environment variables **
```bash
touch .env
```

** 4. Add the following to .env **
```bash
PORT=3000
JWT_SECRET=your_secret_key
MONGO_URI=mongodb://127.0.0.1:27017/simple-social-app
```

** 5. Start MongoDB **
```bash
mongod
# OR on Windows
net start MongoDB
```

** 6. Run development server **
```bash
npm start
# OR (if using nodemon)
npm run dev
```

** 7. Open in browser **
http://localhost:3000

### 🧪 Learning Outcomes

- This project helped me understand:

- Express routing and middleware

- Authentication using JWT and cookies

- Secure password hashing with bcrypt

- MongoDB schema design and relationships

- Environment variable management

- Backend project structure and flow

### 📌 Notes

- This is a learning project, not a production application

- Server-side rendered views using EJS templates

- Deployment was intentionally skipped due to project scope

