import React, { useState, useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import FilterButtons from './FilterButtons';
import VideoGrid from './VideoGrid';
import SearchBar from './SearchBar';

const HomePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [videos, setVideos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('http://localhost:5010/api/videos');
        const data = await response.json();
        setVideos(data);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  const filteredVideos = videos.filter(video => {
    const matchesCategory = selectedCategory === 'All' || video.category === selectedCategory;
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* <Header toggleSidebar={toggleSidebar} /> */}
      <div className="flex">
        <Sidebar isOpen={isSidebarOpen} />
        <main className="flex-1">
          <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
          <FilterButtons selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} />
          <VideoGrid videos={filteredVideos} />
        </main>
      </div>
    </div>
  );
};

export default HomePage;