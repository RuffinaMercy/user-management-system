
# Mini User Management System

## 📌 Project Overview

The **Mini User Management System** is a full-stack web application that provides **secure user authentication**, **role-based access control (RBAC)**, and **basic admin management features**.

The application allows:
- Users to register, log in, and access their personal dashboard and profile
- Admins to manage users by viewing all registered accounts and deactivating users
- Secure access using JWT-based authentication

This project was developed as part of a **Backend Developer / Intern Assessment** to demonstrate backend fundamentals, API security, database integration, and frontend–backend communication.

---

## 🌐 Live Application

- **Frontend (Vercel):**  
  👉 https://user-management-system-deployed-44ge-40h0i3bwr.vercel.app

- **Backend API (Render):**  
  👉 https://user-management-system-backend-cijx.onrender.com

---

## 🛠️ Tech Stack

### Backend
- **Node.js** – runtime environment
- **Express.js** – REST API framework
- **PostgreSQL (Neon)** – cloud database
- **JWT (JSON Web Tokens)** – authentication & authorization
- **bcrypt** – password hashing
- **pg** – PostgreSQL client

### Frontend
- **React** – UI library
- **React Router DOM** – client-side routing
- **Axios** – API communication
- **jwt-decode** – decoding JWT payload

### Tools & Platforms
- **Postman** – API testing
- **Render** – backend deployment
- **Vercel** – frontend deployment
- **Neon** – managed PostgreSQL hosting
- **Git & GitHub** – version control

---

## ⚙️ Setup Instructions (Local Development)

### 1️⃣ Backend Setup

```bash
cd backend
npm install
````

Create a `.env` file inside the **backend** directory:

```env
PORT=5000
DATABASE_URL=postgresql_connection_string
JWT_SECRET=your_secret_key
```

Start the backend server:

```bash
npm run dev
```

Backend runs at:

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

Create a `.env` file inside the **frontend** directory:

```env
REACT_APP_API_URL=http://localhost:5000
```

Frontend runs at:

```
http://localhost:3000
```

---

## 🔐 Environment Variables

### Backend (`backend/.env`)

| Variable     | Description                        |
| ------------ | ---------------------------------- |
| PORT         | Port on which backend runs         |
| DATABASE_URL | PostgreSQL connection string       |
| JWT_SECRET   | Secret key used to sign JWT tokens |

### Frontend (`frontend/.env`)

| Variable          | Description          |
| ----------------- | -------------------- |
| REACT_APP_API_URL | Backend API base URL |

---

## 🚀 Deployment Instructions

### Backend Deployment (Render)

1. Create a **Web Service** on Render
2. Connect the GitHub repository
3. Set **Root Directory** to `backend`
4. Configure:

   * Build Command: `npm install`
   * Start Command: `node src/server.js`
5. Add environment variables in Render dashboard
6. Deploy the service

Backend URL:

```
https://user-management-system-backend-cijx.onrender.com
```

---

### Frontend Deployment (Vercel)

1. Import the GitHub repository into Vercel
2. Set **Root Directory** to `frontend`
3. Add environment variable:

```
REACT_APP_API_URL=https://user-management-system-backend-cijx.onrender.com
```

4. Deploy

Frontend URL:

```
https://user-management-system-deployed-44ge-40h0i3bwr.vercel.app
```

---

## 📑 API Documentation

### 🔐 Authentication APIs

#### Signup

**POST** `/auth/signup`

Request:

```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "password": "Password@123"
}
```

Response:

```json
{
  "token": "jwt_token_here",
  "user": {
    "id": "uuid",
    "email": "john@example.com",
    "role": "user"
  }
}
```

---

#### Login

**POST** `/auth/login`

Request:

```json
{
  "email": "john@example.com",
  "password": "Password@123"
}
```

Response:

```json
{
  "token": "jwt_token_here",
  "user": {
    "id": "uuid",
    "email": "john@example.com",
    "role": "user"
  }
}
```

---

#### Get Current User

**GET** `/users/me`

Headers:

```
Authorization: Bearer <JWT_TOKEN>
```

Response:

```json
{
  "id": "uuid",
  "email": "john@example.com",
  "role": "user"
}
```

---

### 🛡️ Admin APIs (Protected)

#### Get All Users

**GET** `/admin/users`

Headers:

```
Authorization: Bearer <ADMIN_JWT_TOKEN>
```

Response:

```json
[
  {
    "id": "uuid",
    "email": "user@example.com",
    "role": "user",
    "status": "active"
  }
]
```

---

#### Deactivate User

**PATCH** `/admin/users/:id/deactivate`

Headers:

```
Authorization: Bearer <ADMIN_JWT_TOKEN>
```

Response:

```json
{
  "message": "User deactivated successfully"
}
```

---

## 👤 Admin Credentials (Demo)

```
Email: test@example.com
Password: test@123
Role: admin
```

````
