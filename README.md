# School Management System

## Introduction
This project is a School Management System developed using Angular for the frontend and Spring Boot for the backend. The system provides separate dashboards for administrators and students, each tailored to their specific roles and responsibilities.

## Features

### Admin Dashboard
- **Add, Remove, and Update Users:** Administrators can add, remove, and update student and teacher profiles.
- **Manage Permissions:** Administrators can manage permissions for students and teachers.

### Student Dashboard
- **Update Profile:** Students can update their own profile information.
- **Request Permissions:** Students can create permit requests.
- **View Permit Status:** Students can view the status of their permit requests.

## Technologies Used
- **Frontend:** Angular
- **Backend:** Spring Boot
- **Database:** MySQL

## Installation Guide
1. Clone the repository from GitHub: `git clone https://github.com/aalperentanir/School_Managment.git`
2. Navigate to the project directory.
3. Install frontend dependencies: `npm install`
4. Install backend dependencies: ` mvn install`
5. Configure the database settings in the `application.properties` file located in the `backend/src/main/resources` directory.
6. Run the backend server: `mvn spring-boot:run`
7. Run the frontend server: `ng serve`

## Usage
1. Access the application at `http://localhost:4200`.
2. Log in as an administrator or a student.
3. Use the respective dashboards to perform the necessary tasks based on your role.


## Acknowledgements
- This project was inspired by the need for efficient school management systems.
- We thank the Angular and Spring Boot communities for their excellent documentation and support.

## Contact
For any inquiries or issues regarding the project, please contact [alialperentanir@gmail.com].


