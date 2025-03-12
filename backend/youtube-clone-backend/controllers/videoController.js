const Video = require('../models/Video');

// // populate database with sample videos
// const sampleVideos = [
//         {
//           videoId: 'video01',
//           title: 'Funny Cat Video',
//           thumbnailUrl: 'https://pethelpful.com/.image/w_3840,q_auto:good,c_fill,ar_4:3,g_xy_center,x_556,y_388/MjA4NDAwNTI1ODExNTI1MjY0/shutterstock_2251137885-1.png',
//           videoUrl: 'https://videos.pexels.com/video-files/855029/855029-sd_640_360_30fps.mp4',
//           // uploader: 'user01',
//           views: 15200,
//           category: 'Funny',
//         },
      
//         {
//           videoId: 'video02',
//           title: 'Web Development Tutorial',
//           thumbnailUrl: 'https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/top11.png',
//           // uploader: 'user02',
//           views: 200,
//           category: 'Web Development',
//           videoUrl: 'https://www.pexels.com/video/a-hacker-typing-on-a-keyboard-5240956/',
//         },
      
//         {
//           videoId: 'video03',
//           title: 'Funny Cat Video',
//           thumbnailUrl: 'https://pethelpful.com/.image/w_3840,q_auto:good,c_fill,ar_4:3,g_xy_center,x_556,y_388/MjA4NDAwNTI1ODExNTI1MjY0/shutterstock_2251137885-1.png',
//           // uploader: 'user01',
//           views: 15200,
//           category: 'Funny',
//           videoUrl: 'https://videos.pexels.com/video-files/855029/855029-sd_640_360_30fps.mp4',
//         },
      
//         {
//           videoId: 'video04',
//           title: 'Funny Cat Video',
//           thumbnailUrl: 'https://pethelpful.com/.image/w_3840,q_auto:good,c_fill,ar_4:3,g_xy_center,x_556,y_388/MjA4NDAwNTI1ODExNTI1MjY0/shutterstock_2251137885-1.png',
//           // uploader: 'user01',
//           views: 15200,
//           category: 'Funny',
//           videoUrl: 'https://videos.pexels.com/video-files/855029/855029-sd_640_360_30fps.mp4',
//         },
//         {
//           videoId: 'video05',
//           title: 'Funny Cat Video',
//           thumbnailUrl: 'https://pethelpful.com/.image/w_3840,q_auto:good,c_fill,ar_4:3,g_xy_center,x_556,y_388/MjA4NDAwNTI1ODExNTI1MjY0/shutterstock_2251137885-1.png',
//           // uploader: 'user01',
//           views: 15200,
//           category: 'Funny',
//           videoUrl: 'https://videos.pexels.com/video-files/855029/855029-sd_640_360_30fps.mp4',
//         },
//         {
//           videoId: 'video06',
//           title: 'Funny Cat Video',
//           thumbnailUrl: 'https://pethelpful.com/.image/w_3840,q_auto:good,c_fill,ar_4:3,g_xy_center,x_556,y_388/MjA4NDAwNTI1ODExNTI1MjY0/shutterstock_2251137885-1.png',
//           // uploader: 'user01',
//           views: 15200,
//           category: 'Funny',
//           videoUrl: 'https://videos.pexels.com/video-files/855029/855029-sd_640_360_30fps.mp4',
//         },
//         {
//           videoId: 'video07',
//           title: 'Funny Cat Video',
//           thumbnailUrl: 'https://pethelpful.com/.image/w_3840,q_auto:good,c_fill,ar_4:3,g_xy_center,x_556,y_388/MjA4NDAwNTI1ODExNTI1MjY0/shutterstock_2251137885-1.png',
//           // uploader: 'user01',
//           views: 15200,
//           category: 'Funny',
//           videoUrl: 'https://videos.pexels.com/video-files/855029/855029-sd_640_360_30fps.mp4',
//         },
      
//         // Add more video objects here
//       ];

// //   add sample videos to database
// Video.insertMany(sampleVideos);
// console.log('Videos added to database');


// // remove all videos
// (async () => {
//   try {
//     await Video.deleteMany({});
//     console.log('All videos removed');
//   } catch (err) {
//     console.log(err);
//   }
// })();

exports.createVideo = async (req, res) => {
  const { title, videoUrl, thumbnailUrl, category } = req.body;

  try {
    const newVideo = new Video({
      title,
      videoUrl,
      thumbnailUrl,
      // uploader: req.user,
      category,
    });

    await newVideo.save();
    res.json(newVideo);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// Fetch all Videos
exports.getVideos = async (req, res) => {
  try {
    console.log('getVideos called');
    const videos = await Video.find().populate('uploader', 'username');
    res.json(videos);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// Fetch a single video
exports.getVideoById = async (req, res) => {
  const { videoId } = req.params;

  try {
    const video = await Video.findById(videoId).populate('uploader', 'username');
    if (!video) {
      return res.status(404).json({ msg: 'Video not found' });
    }

    res.json(video);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};
