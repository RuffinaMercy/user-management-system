
# Mini User Management System

## 📌 Project Overview

The **Mini User Management System** is a full-stack web application that provides secure user authentication, role-based access control (RBAC), and basic user lifecycle management.

The system supports two roles:
- **User** – can register, log in, view dashboard & profile
- **Admin** – can view all users and manage their access

This project was built as part of a **Backend Developer / Intern Assessment** to demonstrate:
- Authentication flows
- Secure API design
- Role-based authorization
- Clean backend architecture
- Frontend & backend integration

---

## 🛠️ Tech Stack

### Backend
- **Node.js**
- **Express.js**
- **PostgreSQL**
- **JWT (JSON Web Tokens)** – authentication
- **bcrypt** – password hashing
- **Jest** – backend API testing

### Frontend
- **React**
- **React Router DOM**
- **Axios**

---

## ✨ Features

### 👤 User Features
- User signup with validation
- Secure login using JWT
- Dashboard view
- Profile page with account details
- Logout functionality

### 🛡️ Admin Features
- Admin-only dashboard
- View all registered users
- Deactivate user accounts
- Role-based protected routes

### 🔐 Security Features
- Password hashing using bcrypt
- JWT-based authentication
- Role-based access control (RBAC)
- Protected backend routes
- Proper HTTP status codes (`401`, `403`, `409`)
- Environment variables for secrets

---

## 📂 Project Structure

```

Mini-User-Management-System/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── middleware/
│   │   ├── services/
│   │   ├── config/
│   │   ├── utils/
│   │   ├── app.js
│   │   └── server.js
│   ├── tests/
│   ├── .env
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── App.css
│   ├── package.json
│   └── package-lock.json
│
└── README.md

````

---

## ⚙️ Setup Instructions

### 1️⃣ Backend Setup

```bash
cd backend
npm install
````

Create a `.env` file inside the **backend** folder:

```env
PORT=5000
DATABASE_URL=your_postgres_connection_string
JWT_SECRET=your_jwt_secret
```

Start the backend server:

```bash
npm run dev
```

Backend will run at:

```
http://localhost:5000
```

---

### 2️⃣ Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend will run at:

```
http://localhost:3000
```

---

## 🔐 API Endpoints

### Authentication Routes

| Method | Endpoint       | Description                |
| ------ | -------------- | -------------------------- |
| POST   | `/auth/signup` | Register a new user        |
| POST   | `/auth/login`  | Login user                 |
| GET    | `/users/me`    | Get current logged-in user |

### Admin Routes (Admin Only)

| Method | Endpoint                      | Description       |
| ------ | ----------------------------- | ----------------- |
| GET    | `/admin/users`                | Get all users     |
| PATCH  | `/admin/users/:id/deactivate` | Deactivate a user |

---

## 🧪 Testing

Backend API tests are written using **Jest**.

To run tests:

```bash
cd backend
npm test
```

✔ All authentication, authorization, and admin access test cases pass successfully.

---
