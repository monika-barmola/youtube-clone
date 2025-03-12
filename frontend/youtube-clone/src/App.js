import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Registration from './components/Registration';
import HomePage from './components/HomePage';
import VideoPlayer from './components/VideoPlayer';
import ChannelPage from './components/ChannelPage';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Header user={user} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Registration setUser={setUser} />} />
        <Route path="/channel/:username" element={<ChannelPage />} />
        <Route path="/video/:videoId" element={<VideoPlayer />} />
      </Routes>
    </Router>
  );
};

export default App;