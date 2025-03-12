import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import VideoGrid from './VideoGrid';

const ChannelPage = () => {
    const { username } = useParams();
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await fetch(`http://localhost:5010/api/videos?uploader=${username}`);
                const data = await response.json();
                setVideos(data);
            } catch (error) {
                console.error('Error fetching videos:', error);
            }
        };

        fetchVideos();
    }, [username]);

    return (
        <div className="channel-page">
            <h2>{username}'s Channel</h2>
            <VideoGrid videos={videos} />
        </div>
    );
};

export default ChannelPage;