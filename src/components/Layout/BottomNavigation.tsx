import React from 'react';
import { Home, Compass, Map, Plus, User } from 'lucide-react';

interface BottomNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'home', label: 'Ana Akış', icon: Home },
    { id: 'discover', label: 'Keşif', icon: Compass },
    { id: 'map', label: 'Harita', icon: Map },
    { id: 'share', label: 'Paylaş', icon: Plus },
    { id: 'profile', label: 'Profil', icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-around">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            const isShare = tab.id === 'share';
            
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`flex flex-col items-center py-2 px-3 transition-all duration-200 ${
                  isShare
                    ? 'transform -translate-y-2'
                    : ''
                }`}
              >
                <div
                  className={`p-2 rounded-full transition-all duration-200 ${
                    isShare
                      ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                      : isActive
                      ? 'bg-primary-50 text-primary-600'
                      : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className={`h-6 w-6 ${isShare ? 'h-7 w-7' : ''}`} />
                </div>
                <span
                  className={`text-xs mt-1 font-medium ${
                    isActive && !isShare
                      ? 'text-primary-600'
                      : isShare
                      ? 'text-primary-600'
                      : 'text-gray-400'
                  }`}
                >
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default BottomNavigation;