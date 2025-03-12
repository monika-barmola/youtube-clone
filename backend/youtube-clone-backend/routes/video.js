const express = require('express');
const { createVideo, getVideos, getVideoById } = require('../controllers/videoController');
const auth = require('../middleware/auth');
const router = express.Router();



// POST api/videos/create
router.post('/create', auth, createVideo);

// GET api/videos
router.get('/', getVideos);

// GET api/videos/:videoId
router.get('/:videoId', getVideoById);

module.exports = router;
