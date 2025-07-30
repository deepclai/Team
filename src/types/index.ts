export interface User {
  id: string;
  username: string;
  displayName: string;
  avatar: string;
  bio?: string;
  location?: string;
  followersCount: number;
  followingCount: number;
  postsCount: number;
  isVerified?: boolean;
}

export interface Post {
  id: string;
  user: User;
  image: string;
  caption: string;
  location: {
    name: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  likes: number;
  comments: number;
  shares: number;
  createdAt: string;
  isLiked?: boolean;
  tags?: string[];
}

export interface PremiumPackage {
  id: string;
  name: string;
  price: number;
  monthlyPosts: number;
  prizeValue: number;
  prizes: string[];
  color: string;
  icon: string;
  popular?: boolean;
}

export interface Story {
  id: string;
  user: User;
  image: string;
  createdAt: string;
  isViewed?: boolean;
}