Task Manager Web Application

This repository contains the code for a Task Manager web application developed as part of an assignment. The application allows users to register, log in, and manage their tasks effectively. It consists of frontend, backend, database, and API components.

Features:

1. User authentication and authorization using JWT (JSON Web Tokens).
2. CRUD operations (Create, Read, Update, Delete) for tasks.
3. Responsive and user-friendly frontend interface.
4. Integration of frontend with backend APIs.
5. Proper security measures implemented.
6. Robust error handling mechanisms.
7. Documentation for setup and running the application.
8. Thorough testing to ensure functionality and edge cases handling.


Technologies Used:

* Backend: Node.js, Express.js
* Frontend: HTML, CSS, JavaScript (React.js)
* Database: MongoDB
* Authentication: JWT


Setup Instructions:  

1. Open my respository and npm run install-all
2. Use command "npm run dev"
3. Go to http://localhost:3000


API Endpoints:

1. POST /api/users/register: Register a new user.
2. POST /api/users/login: Log in an existing user.
3. GET /api/tasks: Get all tasks for the authenticated user.
4. POST /api/tasks: Create a new task.
5. PUT /api/tasks/:id: Update an existing task.
6. DELETE /api/tasks/:id: Delete a task.


Security measures

1. Validations
2. Password hashing


Acknowledgements:

1. Docs of Reactjs, Nodejs, Tailwind.css and MongoDb Atlas Web Application guide.