import React from 'react';
import { Settings, MapPin, Calendar, Users, Camera, Heart } from 'lucide-react';
import { User } from '../../types';

interface ProfileViewProps {
  user: User;
}

const ProfileView: React.FC<ProfileViewProps> = ({ user }) => {
  const userPosts = [
    'https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=300',
    'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=300',
    'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=300',
    'https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=300',
    'https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=300',
    'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=300',
  ];

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        {/* Cover Photo */}
        <div className="h-32 bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-500"></div>
        
        {/* Profile Info */}
        <div className="px-6 pb-6">
          <div className="flex items-start justify-between -mt-16 mb-4">
            <div className="flex items-end space-x-4">
              <img
                src={user.avatar}
                alt={user.displayName}
                className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
              />
              <div className="pb-2">
                <div className="flex items-center space-x-2">
                  <h1 className="text-2xl font-bold text-gray-900">{user.displayName}</h1>
                  {user.isVerified && (
                    <span className="text-primary-500 text-xl">✓</span>
                  )}
                </div>
                <p className="text-gray-600">@{user.username}</p>
              </div>
            </div>
            <button className="btn-secondary mt-4">
              <Settings className="w-4 h-4 mr-2" />
              Düzenle
            </button>
          </div>

          {/* Bio */}
          {user.bio && (
            <p className="text-gray-700 mb-4">{user.bio}</p>
          )}

          {/* Location & Join Date */}
          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
            {user.location && (
              <div className="flex items-center space-x-1">
                <MapPin className="w-4 h-4" />
                <span>{user.location}</span>
              </div>
            )}
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>Ocak 2024'te katıldı</span>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center space-x-6">
            <div className="text-center">
              <div className="text-xl font-bold text-gray-900">{user.postsCount}</div>
              <div className="text-sm text-gray-500">Hikaye</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-gray-900">{user.followersCount.toLocaleString()}</div>
              <div className="text-sm text-gray-500">Takipçi</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-gray-900">{user.followingCount}</div>
              <div className="text-sm text-gray-500">Takip</div>
            </div>
          </div>
        </div>
      </div>

      {/* Activity Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-xl shadow-md p-4 text-center">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
            <Camera className="w-5 h-5 text-blue-600" />
          </div>
          <div className="text-lg font-bold text-gray-900">89</div>
          <div className="text-sm text-gray-500">Bu Ay</div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-4 text-center">
          <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
            <Heart className="w-5 h-5 text-red-600" />
          </div>
          <div className="text-lg font-bold text-gray-900">2.1K</div>
          <div className="text-sm text-gray-500">Toplam Beğeni</div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-4 text-center">
          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
            <Users className="w-5 h-5 text-green-600" />
          </div>
          <div className="text-lg font-bold text-gray-900">45</div>
          <div className="text-sm text-gray-500">Konum</div>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Hikayelerim</h2>
        <div className="grid grid-cols-3 gap-2">
          {userPosts.map((post, index) => (
            <div
              key={index}
              className="aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-75 transition-opacity"
            >
              <img
                src={post}
                alt={`Post ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        {userPosts.length === 0 && (
          <div className="text-center py-12">
            <Camera className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">Henüz hikaye paylaşılmamış</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileView;