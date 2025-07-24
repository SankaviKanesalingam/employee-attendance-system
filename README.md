# 🧪 Employee Attendance Management System

A simplified RESTful API for managing employee attendance, built with **Node.js**, **Express.js**, **SQLite**, and **JWT** for secure authentication. This system supports **Admin** and **Employee** roles and allows tracking of check-in/check-out logs.

---

## 🚀 Features

- ✅ User authentication with roles (Admin & Employee)
- 🕒 Endpoints to mark attendance: check-in and check-out
- 👤 Employees can view their own attendance logs
- 🧑‍💼 Admins can view all attendance records
- 🧪 Basic unit tests using Jest and Supertest

---

## 🛠️ Tech Stack

- **Node.js** + **Express.js** – Backend framework
- **SQLite** – Lightweight relational database
- **JWT** – Authentication via JSON Web Tokens
- **Bcrypt** – Secure password hashing
- **Jest** + **Supertest** – Testing framework

---

## 📦 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/SankaviKanesalingam/employee-attendance-system.git
cd employee-attendance-system
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory with the following content:

```env
JWT_SECRET=your_secret_key_here
PORT=3000
```

> Replace `your_secret_key_here` with a secure random string.

### 4. Run the Server

```bash
npm start
```

Server will run at:  
```
http://localhost:3000
```

### 5. Run Unit Tests

```bash
npm test
```

---

## 📡 API Endpoints

### 🔐 Authentication

| Method | Endpoint              | Description                     | Access      |
|--------|-----------------------|---------------------------------|-------------|
| POST   | `/api/auth/register`  | Register new user               | Public      |
| POST   | `/api/auth/login`     | Login and receive JWT token     | Public      |

### 🕒 Attendance

| Method | Endpoint                       | Description                         | Access       |
|--------|--------------------------------|-------------------------------------|--------------|
| POST   | `/api/attendance/check-in`     | Record check-in                     | Authenticated|
| POST   | `/api/attendance/check-out/:id`| Record check-out by attendance ID   | Authenticated|
| GET    | `/api/attendance/logs`         | View personal attendance logs       | Authenticated|
| GET    | `/api/attendance/all-logs`     | View all attendance logs (admin)    | Admin only   |

> All protected routes require the `Authorization: Bearer <JWT>` header.

---

## 🧪 Testing the API

You can test the endpoints using the included `requests.http` file in **VS Code** with the [REST Client extension](https://marketplace.visualstudio.com/items?itemName=humao.rest-client).

- Click "Send Request" above each request
- Replace:
  - `<token>` with the JWT token from login response
  - `<id>` with the appropriate attendance record ID for check-out

---


