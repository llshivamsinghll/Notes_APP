# Notes App

A simple notes application that lets you create, read, update, and delete your personal notes. Built with Node.js, Express, and Prisma.

## What You Can Do

- Create an account and log in
- Create, view, edit, and delete your personal notes
- Access your notes securely with JWT authentication

## Getting Started

### What You Need

- Node.js (v14 or higher)
- PostgreSQL database
- npm 

### Setup Steps

1. Clone the repository:
   ```
   git clone <repository-url>
   cd Notes_APP
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file with these settings:
   ```
   PORT=3000
   DATABASE_URL="postgresql://username:password@localhost:5432/notes_db"
   JWT_SECRET="your_jwt_secret_key"
   ```

4. Set up the database:
   ```
   npx prisma migrate dev
   ```

5. Start the server:
   ```
   npm start
   ```

## How to Use the API

### User Management

#### Create an Account
- **POST** `/api/signup`
- **Body**:
  ```json
  {
    "username": "demoUser",
    "email": "demo@example.com",
    "password": "password123"
  }
  ```

#### Log In
- **POST** `/api/login`
- **Body**:
  ```json
  {
    "email": "demo@example.com",
    "password": "password123"
  }
  ```

#### View Your Profile
- **GET** `/api/profile`
- **Headers**: `Authorization: Bearer <token>`

### Managing Notes

All note operations require a valid JWT token in the Authorization header.

#### View All Your Notes
- **GET** `/api/notes`
- **Headers**: `Authorization: Bearer <token>`

#### Create a New Note
- **POST** `/api/notes`
- **Headers**: `Authorization: Bearer <token>`
- **Body**:
  ```json
  {
    "title": "New Note",
    "content": "This is a new note."
  }
  ```

#### View a Specific Note
- **GET** `/api/notes/:id`
- **Headers**: `Authorization: Bearer <token>`

#### Update a Note
- **PUT** `/api/notes/:id`
- **Headers**: `Authorization: Bearer <token>`
- **Body**:
  ```json
  {
    "title": "Updated Note",
    "content": "This note has been updated."
  }
  ```

#### Delete a Note
- **DELETE** `/api/notes/:id`
- **Headers**: `Authorization: Bearer <token>`

## Common Issues

- **400 Bad Request**: You're missing required information
- **401 Unauthorized**: Your token is missing or invalid
- **404 Not Found**: The requested resource doesn't exist
- **500 Internal Server Error**: Something went wrong on our end

## Project Structure

```
Notes_APP/
├── controllers/
│   ├── notesControllers.js
│   └── userControllers.js
├── middleware/
│   └── authMiddleware.js
├── prisma/
│   ├── migrations/
│   └── schema.prisma
├── routes/
│   ├── notesRoutes.js
│   └── userRoutes.js
├── .env
├── index.js
├── package.json
└── README.md
```

