const express = require('express');
const { addComment, getCommentsByVideo } = require('../controllers/commentController');
const auth = require('../middleware/auth');
const router = express.Router();

// POST api/comments/:videoId -> Add a comment to a video
router.post('/:videoId', auth, addComment);

// GET api/comments/:videoId -> Fetch all comments for a video
router.get('/:videoId', getCommentsByVideo);

module.exports = router;
