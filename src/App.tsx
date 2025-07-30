import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Layout/Header';
import BottomNavigation from './components/Layout/BottomNavigation';
import StoriesRow from './components/Stories/StoriesRow';
import PostCard from './components/Posts/PostCard';
import PremiumPackages from './components/Premium/PremiumPackages';
import MapView from './components/Map/MapView';
import SharePost from './components/Share/SharePost';
import ProfileView from './components/Profile/ProfileView';
import { mockPosts, mockStories, premiumPackages, mockUsers } from './data/mockData';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="space-y-6">
            <StoriesRow stories={mockStories} />
            <div className="max-w-2xl mx-auto px-4 space-y-6">
              {mockPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        );
      
      case 'discover':
        return (
          <div className="max-w-6xl mx-auto px-4 space-y-6">
            <PremiumPackages packages={premiumPackages} />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        );
      
      case 'map':
        return (
          <div className="max-w-6xl mx-auto px-4">
            <MapView />
          </div>
        );
      
      case 'share':
        return (
          <div className="max-w-2xl mx-auto px-4">
            <SharePost />
          </div>
        );
      
      case 'profile':
        return (
          <div className="max-w-4xl mx-auto px-4">
            <ProfileView user={mockUsers[0]} />
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="pb-20 pt-6">
          {renderContent()}
        </main>
        <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    </Router>
  );
}

export default App;