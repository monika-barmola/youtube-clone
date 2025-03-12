
# YouTube Clone (MERN Stack)

This project is a full-stack YouTube Clone application built using MongoDB, Express, React, and Node.js (MERN). It includes a backend API for user authentication, video management, and comments functionality, as well as a React-based frontend for video viewing and interaction.

## Features

- User Authentication: Sign up, login, and JWT token-based authorization.
- Video Management: Add, fetch, update, and delete videos.
- Comment System: Add and fetch comments for a specific video.
- Frontend: User interface similar to YouTube with video listing, filtering, and viewing functionality.

---

## Backend Setup and Installation

### Prerequisites

- **Node.js** (v14+)
- **MongoDB** (local instance or MongoDB Atlas)
- **Postman** (for API testing)
- **Git** (optional, for cloning the project)

### 1. Clone the Repository

```bash
git clone https://github.com/your-repo/youtube-clone.git
cd youtube-clone/backend
```

### 2. Install Dependencies

In the backend directory, run the following command to install the necessary packages:

```bash
npm install
```

### 3. Create a `.env` File

Create a `.env` file in the root of the backend directory with the following variables:

```bash
PORT=5000
MONGO_URI=your-mongo-db-connection-string
JWT_SECRET=your-jwt-secret
```

- Replace `your-mongo-db-connection-string` with your MongoDB URI (either MongoDB Atlas or local MongoDB).
- Set a strong value for `JWT_SECRET`.

### 4. Run the Backend Application

Start the Node.js server using the following command:

```bash
npm start
```

By default, the backend server will run on `http://localhost:5000`.

---

## Frontend Setup and Installation

### Prerequisites

- **Node.js** (v14+)
- **Git** (optional, for cloning the project)

### 1. Clone the Repository (if not already done)

```bash
git clone https://github.com/monika-barmola/youtube-clone.git
cd youtube-clone/frontend
```

### 2. Install Dependencies

In the frontend directory, run the following command to install the necessary packages:

```bash
npm install
```

### 3. Run the Frontend Application

Start the React frontend application using the following command:

```bash
npm start
```

By default, the frontend will run on `http://localhost:3000`.

---

## API Endpoints (Backend)

### **User Authentication**

1. **Sign Up** (POST `/api/auth/signup`)
   - **Body**: 
     ```json
     {
       "username": "user01",
       "email": "user01@example.com",
       "password": "password123"
     }
     ```
   - **Response**: Returns a JWT token on successful sign-up.

2. **Login** (POST `/api/auth/login`)
   - **Body**:
     ```json
     {
       "email": "user01@example.com",
       "password": "password123"
     }
     ```
   - **Response**: Returns a JWT token on successful login.

### **Video Management**

1. **Fetch All Videos** (GET `/api/videos`)
   - **Description**: Fetch all videos from the database.

2. **Fetch Video by ID** (GET `/api/videos/:videoId`)
   - **Description**: Fetch a single video by its ID.

3. **Add Video** (POST `/api/videos`)
   - **Body**:
     ```json
     {
       "title": "Funny Cat Video",
       "thumbnailUrl": "https://example.com/thumbnail.jpg",
       "videoUrl": "https://example.com/video.mp4",
       "uploader": "user01",
       "category": "Funny"
     }
     ```
   - **Authorization**: Requires Bearer token (JWT) for authenticated users.

4. **Update Video** (PUT `/api/videos/:videoId`)
   - **Description**: Update a video by its ID.
   - **Authorization**: Requires Bearer token (JWT).

5. **Delete Video** (DELETE `/api/videos/:videoId`)
   - **Description**: Delete a video by its ID.
   - **Authorization**: Requires Bearer token (JWT).

### **Comments Management**

1. **Add Comment** (POST `/api/comments/:videoId`)
   - **Body**:
     ```json
     {
       "text": "Great video!"
     }
     ```
   - **Authorization**: Requires Bearer token (JWT).

2. **Fetch Comments by Video** (GET `/api/comments/:videoId`)
   - **Description**: Fetch all comments for a specific video.

---

## Testing the API

Use **Postman** or any API testing tool to test the backend API endpoints.

- For protected routes, you need to provide a **Bearer token** (JWT) in the Authorization header.
- You can generate the token by signing up and logging in through the authentication routes.

---

## Technologies Used

### Backend:
- **Node.js**: Backend runtime.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing data.
- **JWT**: JSON Web Tokens for authentication.

### Frontend:
- **React**: Frontend library for building user interfaces.
- **React Router**: For routing in the frontend.
- **CSS**: Styling for the frontend interface.

