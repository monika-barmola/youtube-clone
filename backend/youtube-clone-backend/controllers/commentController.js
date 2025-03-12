const Comment = require('../models/Comment');
const Video = require('../models/Video');


// // remove all comments for a video
// videoId = "67d04ec831d0d13aeba880e1";
// Comment.deleteMany({ video: videoId });
// console.log("All comments for video with ID " + videoId + " have been removed");

// // remove all comments 
// Comment.deleteMany({});
// console.log("All comments have been removed");

// Add a comment to a video
exports.addComment = async (req, res) => {
  const { videoId } = req.params;
  const { text } = req.body;

  try {
    // Check if the video exists
    const video = await Video.findById(videoId);
    if (!video) {
      return res.status(404).json({ msg: 'Video not found' });
    }

    // Create a new comment
    const newComment = new Comment({
      text,
      user: req.user, // the user is authenticated and available via JWT
      video: videoId,
    });

    // Save the comment to the database
    const savedComment = await newComment.save();

    // Add the comment ID to the video’s comment array (optional, if needed)
    video.comments.push(savedComment._id);
    await video.save();

    res.json(savedComment);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// Fetch all comments for a video
exports.getCommentsByVideo = async (req, res) => {
  const { videoId } = req.params;

  try {
    // Fetch all comments related to the video
    const comments = await Comment.find({ video: videoId })
      .populate('user', 'username') // Populate with user details
      .sort({ timestamp: -1 }); // Sort by latest comment

    if (!comments) {
      return res.status(404).json({ msg: 'No comments found for this video' });
    }

    res.json(comments);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};
