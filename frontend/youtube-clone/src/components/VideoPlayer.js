import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const VideoPlayer = () => {
    const { videoId } = useParams();
    const [video, setVideo] = useState(null);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [editingCommentId, setEditingCommentId] = useState(null);
    const [editingCommentText, setEditingCommentText] = useState('');

    useEffect(() => {
        const fetchVideo = async () => {
            try {
                const response = await fetch(`http://localhost:5010/api/videos/${videoId}`);
                const data = await response.json();
                setVideo(data);
                setComments(data.comments || []);
            } catch (error) {
                console.error('Error fetching video:', error);
            }
        };

        fetchVideo();
    }, [videoId]);

    const handleAddComment = () => {
        if (newComment.trim()) {
            const updatedComments = [...comments, { id: Date.now(), text: newComment }];
            setComments(updatedComments);
            setNewComment('');
        }
    };

    const handleEditComment = (id) => {
        const comment = comments.find((comment) => comment.id === id);
        setEditingCommentId(id);
        setEditingCommentText(comment.text);
    };

    const handleUpdateComment = () => {
        setComments(comments.map((comment) =>
            comment.id === editingCommentId ? { ...comment, text: editingCommentText } : comment
        ));
        setEditingCommentId(null);
        setEditingCommentText('');
    };

    const handleDeleteComment = (id) => {
        setComments(comments.filter((comment) => comment.id !== id));
    };

    if (!video) {
        return <div>Loading...</div>;
    }

    return (
        <div className="video-player-container">
            <div className="video-player">
                <video controls>
                    <source src={video.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="video-details">
                <h2>{video.title}</h2>
                <p>{video.description}</p>
                <p>Uploaded by: monika</p>
                <p>Category: {video.category}</p>
                <div className="video-actions">
                    <button>Like</button>
                    <button>Dislike</button>
                </div>
            </div>
            <div className="comments-section">
                <h3>Comments</h3>
                <div className="add-comment">
                    <input
                        type="text"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Add a comment"
                    />
                    <button onClick={handleAddComment}>Add Comment</button>
                </div>
                <ul className="comments-list">
                    {comments.map((comment) => (
                        <li key={comment.id}>
                            {editingCommentId === comment.id ? (
                                <div>
                                    <input
                                        type="text"
                                        value={editingCommentText}
                                        onChange={(e) => setEditingCommentText(e.target.value)}
                                    />
                                    <button onClick={handleUpdateComment}>Update</button>
                                </div>
                            ) : (
                                <div>
                                    <span>{comment.text}</span>
                                    <button onClick={() => handleEditComment(comment.id)}>Edit</button>
                                    <button onClick={() => handleDeleteComment(comment.id)}>Delete</button>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default VideoPlayer;