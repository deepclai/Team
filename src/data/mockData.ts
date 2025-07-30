import { User, Post, PremiumPackage, Story } from '../types';

export const mockUsers: User[] = [
  {
    id: '1',
    username: 'mehmet_istanbul',
    displayName: 'Mehmet Yılmaz',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    bio: 'İstanbul\'un gizli köşelerini keşfediyorum 📸',
    location: 'İstanbul, Türkiye',
    followersCount: 1250,
    followingCount: 340,
    postsCount: 89,
    isVerified: true
  },
  {
    id: '2',
    username: 'ayse_gezgin',
    displayName: 'Ayşe Kaya',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
    bio: 'Dünyayı adım adım keşfediyorum ✈️',
    location: 'Ankara, Türkiye',
    followersCount: 890,
    followingCount: 567,
    postsCount: 156
  },
  {
    id: '3',
    username: 'ali_photographer',
    displayName: 'Ali Demir',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150',
    bio: 'Fotoğrafla hikaye anlatıyorum 📷',
    location: 'İzmir, Türkiye',
    followersCount: 2340,
    followingCount: 123,
    postsCount: 234,
    isVerified: true
  }
];

export const mockPosts: Post[] = [
  {
    id: '1',
    user: mockUsers[0],
    image: 'https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Galata Kulesi\'nden İstanbul manzarası... Bu şehrin her köşesinde farklı bir hikaye var. Sabah erken saatlerde çıktığım bu fotoğraf, şehrin uyanışını gösteriyor. İstanbul\'u seviyorum çünkü her gün yeni bir şey keşfediyorum.',
    location: {
      name: 'Galata Kulesi, İstanbul',
      coordinates: { lat: 41.0256, lng: 28.9744 }
    },
    likes: 234,
    comments: 45,
    shares: 12,
    createdAt: '2024-01-15T08:30:00Z',
    isLiked: true,
    tags: ['istanbul', 'galatakulesi', 'manzara', 'sabah']
  },
  {
    id: '2',
    user: mockUsers[1],
    image: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Kapadokya\'da balon turu... Hayatımda gördüğüm en büyüleyici manzaralardan biri. Peribacaları arasında uçmak, sanki masalın içinde olmak gibi. Bu anı hiç unutmayacağım.',
    location: {
      name: 'Kapadokya, Nevşehir',
      coordinates: { lat: 38.6431, lng: 34.8331 }
    },
    likes: 567,
    comments: 89,
    shares: 34,
    createdAt: '2024-01-14T06:15:00Z',
    tags: ['kapadokya', 'balon', 'peribacaları', 'gündoğumu']
  },
  {
    id: '3',
    user: mockUsers[2],
    image: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Efes Antik Kenti\'nde tarihle yüz yüze... Bu taşların her biri binlerce yıllık hikayeler anlatıyor. Fotoğrafçı gözüyle baktığımda, geçmişle bugün arasında bir köprü kurduğumu hissediyorum.',
    location: {
      name: 'Efes Antik Kenti, İzmir',
      coordinates: { lat: 37.9395, lng: 27.3417 }
    },
    likes: 445,
    comments: 67,
    shares: 23,
    createdAt: '2024-01-13T14:20:00Z',
    isLiked: true,
    tags: ['efes', 'antikkent', 'tarih', 'izmir']
  }
];

export const mockStories: Story[] = [
  {
    id: '1',
    user: mockUsers[0],
    image: 'https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=400',
    createdAt: '2024-01-15T10:00:00Z',
    isViewed: false
  },
  {
    id: '2',
    user: mockUsers[1],
    image: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=400',
    createdAt: '2024-01-15T09:30:00Z',
    isViewed: true
  },
  {
    id: '3',
    user: mockUsers[2],
    image: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=400',
    createdAt: '2024-01-15T08:45:00Z',
    isViewed: false
  }
];

export const premiumPackages: PremiumPackage[] = [
  {
    id: 'small',
    name: 'Smoll Paket',
    price: 200,
    monthlyPosts: 5,
    prizeValue: 2000,
    prizes: ['2.000 TL Nakit', 'Market Çeki', 'Akaryakıt Kartı', 'Alışveriş Kuponu'],
    color: 'from-green-400 to-green-600',
    icon: '🎁'
  },
  {
    id: 'xl',
    name: 'XL Paket',
    price: 500,
    monthlyPosts: 10,
    prizeValue: 10000,
    prizes: ['Elektrikli Scooter', '10.000 TL Nakit Para'],
    color: 'from-blue-400 to-blue-600',
    icon: '🛴',
    popular: true
  },
  {
    id: 'xxl',
    name: 'XXL Paket',
    price: 800,
    monthlyPosts: 20,
    prizeValue: 25000,
    prizes: ['50cc Motor', 'Apple iPhone', 'Premium Teknoloji Ürünleri'],
    color: 'from-purple-400 to-purple-600',
    icon: '🏍️'
  }
];