import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, MapPin, MoreHorizontal } from 'lucide-react';
import { Post } from '../../types';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const [isLiked, setIsLiked] = useState(post.isLiked || false);
  const [likesCount, setLikesCount] = useState(post.likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Az önce';
    if (diffInHours < 24) return `${diffInHours} saat önce`;
    if (diffInHours < 48) return 'Dün';
    return `${Math.floor(diffInHours / 24)} gün önce`;
  };

  return (
    <article className="story-card mb-6">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-3">
          <img
            src={post.user.avatar}
            alt={post.user.displayName}
            className="w-10 h-10 rounded-full ring-2 ring-primary-200"
          />
          <div>
            <div className="flex items-center space-x-1">
              <h3 className="font-semibold text-gray-900">{post.user.displayName}</h3>
              {post.user.isVerified && (
                <span className="text-primary-500">✓</span>
              )}
            </div>
            <div className="flex items-center space-x-1 text-sm text-gray-500">
              <MapPin className="w-3 h-3" />
              <span>{post.location.name}</span>
              <span>•</span>
              <span>{formatDate(post.createdAt)}</span>
            </div>
          </div>
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <MoreHorizontal className="w-5 h-5 text-gray-400" />
        </button>
      </div>

      {/* Image */}
      <div className="relative">
        <img
          src={post.image}
          alt="Post content"
          className="w-full h-80 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <button
            onClick={handleLike}
            className={`flex items-center space-x-2 transition-all duration-200 ${
              isLiked ? 'text-red-500' : 'text-gray-600 hover:text-red-500'
            }`}
          >
            <Heart className={`w-6 h-6 ${isLiked ? 'fill-current' : ''}`} />
            <span className="font-medium">{likesCount}</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors">
            <MessageCircle className="w-6 h-6" />
            <span className="font-medium">{post.comments}</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors">
            <Share2 className="w-6 h-6" />
            <span className="font-medium">{post.shares}</span>
          </button>
        </div>
      </div>

      {/* Caption */}
      <div className="px-4 pb-4">
        <p className="text-gray-800 leading-relaxed">
          <span className="font-semibold">{post.user.username}</span>{' '}
          {post.caption}
        </p>
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="text-primary-600 text-sm font-medium hover:text-primary-700 cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

export default PostCard;