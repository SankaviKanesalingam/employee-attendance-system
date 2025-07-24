Employee Attendance Management System
A RESTful API for managing employee attendance, built with Node.js, Express.js, SQLite, and JWT for authentication.
Features

User authentication (Admin & Employee roles)
Endpoints for checking in/out
Employee endpoint to view personal attendance logs
Admin endpoint to view all attendance records
Basic unit tests with Jest and Supertest

Setup

Clone the repository:
git clone <repository-url>
cd employee-attendance-system


Install dependencies:
npm install


Set up environment variables:Create a .env file with:
JWT_SECRET=your_secret_key_here
PORT=3000


Run the server:
npm start


Run tests:
npm test



API Endpoints

POST /api/auth/register: Register a new user (username, password, role)
POST /api/auth/login: Login and receive a JWT
POST /api/attendance/check-in: Record check-in (authenticated)
POST /api/attendance/check-out/:id: Record check-out (authenticated)
GET /api/attendance/logs: View personal logs (authenticated)
GET /api/attendance/all-logs: View all logs (admin only)

Testing
Use the requests.http file with the VS Code REST Client extension to test endpoints.
Technologies

Node.js, Express.js
SQLite
JWT for authentication
Bcrypt for password hashing
Jest and Supertest for testing
