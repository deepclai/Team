import React from 'react';
import { MapPin, Navigation, Users } from 'lucide-react';

const MapView: React.FC = () => {
  const popularLocations = [
    { name: 'Galata Kulesi', posts: 1234, image: 'https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { name: 'Kapadokya', posts: 987, image: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { name: 'Efes Antik Kenti', posts: 756, image: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { name: 'Pamukkale', posts: 543, image: 'https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=300' },
  ];

  return (
    <div className="space-y-6">
      {/* Map Header */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900">Harita Keşfi</h2>
          <button className="btn-primary flex items-center space-x-2">
            <Navigation className="w-5 h-5" />
            <span>Konumumu Bul</span>
          </button>
        </div>
        <p className="text-gray-600">
          Dünya üzerindeki hikayeleri keşfedin ve kendi hikayenizi paylaşın.
        </p>
      </div>

      {/* Interactive Map Placeholder */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="h-96 bg-gradient-to-br from-blue-100 via-green-50 to-yellow-50 flex items-center justify-center relative">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-primary-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">İnteraktif Harita</h3>
            <p className="text-gray-600 mb-4">Yakında gelecek olan harita özelliği ile</p>
            <p className="text-gray-600">tüm hikayeleri konumlarıyla birlikte keşfedeceksiniz!</p>
          </div>
          
          {/* Mock location pins */}
          <div className="absolute top-20 left-20 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-32 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
          <div className="absolute bottom-24 left-1/3 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 right-20 w-4 h-4 bg-purple-500 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Popular Locations */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center space-x-2 mb-6">
          <Users className="w-6 h-6 text-primary-500" />
          <h3 className="text-xl font-semibold text-gray-900">Popüler Konumlar</h3>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {popularLocations.map((location, index) => (
            <div
              key={index}
              className="group cursor-pointer bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-32">
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-2 left-2 text-white">
                  <h4 className="font-semibold text-sm">{location.name}</h4>
                  <p className="text-xs opacity-90">{location.posts} hikaye</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Map Features */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <MapPin className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Konum Bazlı Keşif</h3>
          <p className="text-gray-600 text-sm">Yakınınızdaki hikayeleri keşfedin</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Topluluk Hikayeleri</h3>
          <p className="text-gray-600 text-sm">Aynı yerdeki farklı deneyimler</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Navigation className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Rota Planlama</h3>
          <p className="text-gray-600 text-sm">Hikayelerle dolu rotalar oluşturun</p>
        </div>
      </div>
    </div>
  );
};

export default MapView;