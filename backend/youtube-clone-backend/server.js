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

// Connect to MongoDB and start the server
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/youtube-clone', 
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
