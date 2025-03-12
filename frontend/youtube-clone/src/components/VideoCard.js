import React from 'react';
import { useNavigate } from 'react-router-dom';

const VideoCard = ({ video }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/video/${video._id}`);
    };

    return (
        <div className="video-card" onClick={handleClick}>
            <div className="thumbnail-container">
                <img src={video.thumbnailUrl} alt={video.title} className="thumbnail" />
            </div>
            <div className="video-info">
                <h3 className="video-title">{video.title}</h3>
                <p className="video-uploader">{video.uploader}</p>
                <p className="video-views">{video.views} views</p>
                <p className="video-category">{video.category}</p>
            </div>
        </div>
    );
};

export default VideoCard;