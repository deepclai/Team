import React from 'react';
import { Story } from '../../types';

interface StoriesRowProps {
  stories: Story[];
}

const StoriesRow: React.FC<StoriesRowProps> = ({ stories }) => {
  return (
    <div className="bg-white border-b border-gray-200 py-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
          {/* Add Your Story */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300 hover:border-primary-400 transition-colors cursor-pointer">
                <span className="text-2xl">+</span>
              </div>
              <p className="text-xs text-center mt-2 text-gray-600 font-medium">Hikayeni Ekle</p>
            </div>
          </div>

          {/* Stories */}
          {stories.map((story) => (
            <div key={story.id} className="flex-shrink-0">
              <div className="relative cursor-pointer group">
                <div
                  className={`w-16 h-16 rounded-lg overflow-hidden ring-2 ${
                    story.isViewed
                      ? 'ring-gray-300'
                      : 'ring-gradient-to-r ring-primary-500'
                  } ring-offset-2 transition-all duration-200 group-hover:scale-105`}
                >
                  <img
                    src={story.image}
                    alt={story.user.displayName}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full overflow-hidden border-2 border-white">
                  <img
                    src={story.user.avatar}
                    alt={story.user.displayName}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <p className="text-xs text-center mt-2 text-gray-600 font-medium truncate w-16">
                {story.user.username.split('_')[0]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoriesRow;