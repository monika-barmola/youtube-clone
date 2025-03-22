const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const videoRoutes = require('./routes/video');
const commentRoutes = require('./routes/comment');
const cors = require('cors');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Use CORS middleware to allow cross-origin requests
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/videos', videoRoutes);
app.use('/api/comments', commentRoutes);


const mongodbUsername = process.env.MONGO_USERNAME || "Monika";
const mongodbPassword = process.env.MONGO_PASSWORD || "0uGvGTKA7VHrzyXi";
const mongoURI = `mongodb+srv://${mongodbUsername}:${mongodbPassword}@monikaytclone.wyww9.mongodb.net/?appName=MonikaYtClone`;


// Connect to MongoDB and start the server
mongoose.connect(mongoURI, 
    { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    port = process.env.PORT || 5010;
    app.listen(port , () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch(err => {
    console.error('Database connection error', err);
  });
