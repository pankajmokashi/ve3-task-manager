# VE3 - Task Manager

## Project Setup

### Frontend Setup
1. Clone the repository:
-     git clone https://github.com/pankajmokashi/ve3-task-manager.git
2. Navigate to the frontend directory:
-     cd ve3-task-manager.git/task-manager-frontend
3. Install dependencies:
-     npm install
4. Start the development server:
-     npm start
5. Open your browser and visit http://localhost:3000 to view the application.
   
---
 
### Backend Setup
1. Navigate to the backend directory:
-     cd ve3-task-manager.git/task-manager-backend
2. Install dependencies:
-     npm install
3. Set up your MySQL database and update the database configuration in config.js.
- MYSQL queries
-     CREATE DATABASE task_manager:
-     Use task_manager;
-     CREATE TABLE tasks (id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(255) NOT NULL, description TEXT);
-     CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255) NOT NULL UNIQUE, password VARCHAR(255) NOT NULL);
5. Start the backend server:
-     npm start
5. The backend server will run on http://localhost:3001.

---

### Tasks API
GET /tasks: Fetch all tasks.
GET /tasks/:id: Fetch a single task by ID.
POST /tasks: Add a new task.
PUT /tasks/:id: Update a task by ID.
DELETE /tasks/:id: Delete a task by ID.

### User Authentication API
POST /register: Register a new user.
POST /login: Log in with username and password.

---

### Additional Information
- This project uses React for the frontend and Node.js with Express for the backend.
- User authentication is implemented using JWT (JSON Web Tokens).
- Database storage is handled using MySQL, and the database configuration is provided in config.js.

