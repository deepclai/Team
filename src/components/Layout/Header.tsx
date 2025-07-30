import React from 'react';
import { Search, Bell, MessageCircle } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Gezipedia
              </h1>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:block flex-1 max-w-lg mx-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                aria-label="Arama"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Konum, kullanıcı veya hikaye ara..."
              />
            </div>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <button 
              aria-label="Bildirimler"
              className="p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Bell className="h-6 w-6" />
            </button>
            <button 
              aria-label="Mesajlar"
              className="p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <MessageCircle className="h-6 w-6" />
            </button>
            <div className="flex items-center">
              <img
                className="h-8 w-8 rounded-full ring-2 ring-primary-500 ring-offset-2"
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150"
                alt="Profile"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;