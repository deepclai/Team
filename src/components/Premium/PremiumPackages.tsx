import React from 'react';
import { Crown, Star, Zap } from 'lucide-react';
import { PremiumPackage } from '../../types';

interface PremiumPackagesProps {
  packages: PremiumPackage[];
}

const PremiumPackages: React.FC<PremiumPackagesProps> = ({ packages }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-4">
          <Crown className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Premium Üyelik</h2>
        <p className="text-gray-600">
          Daha fazla paylaşım yapın, değerli ödüller kazanın!
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className={`relative rounded-xl p-6 border-2 transition-all duration-300 hover:scale-105 ${
              pkg.popular
                ? 'border-primary-500 bg-gradient-to-br from-primary-50 to-secondary-50'
                : 'border-gray-200 hover:border-primary-300'
            }`}
          >
            {pkg.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                  <Star className="w-4 h-4" />
                  <span>En Popüler</span>
                </div>
              </div>
            )}

            <div className="text-center">
              <div className="text-4xl mb-3">{pkg.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-gray-900">{pkg.price}</span>
                <span className="text-gray-600 ml-1">TL/ay</span>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Aylık {pkg.monthlyPosts} fotoğraf</span>
              </div>
              <div className="flex items-center space-x-2">
                <Crown className="w-5 h-5 text-yellow-500" />
                <span className="text-gray-700">{pkg.prizeValue.toLocaleString()} TL değerinde ödül</span>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-2">Ödüller:</h4>
              <ul className="space-y-1">
                {pkg.prizes.map((prize, index) => (
                  <li key={index} className="text-sm text-gray-600 flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                    <span>{prize}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                pkg.popular
                  ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:from-primary-600 hover:to-secondary-600 shadow-lg hover:shadow-xl'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Paketi Seç
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
        <h3 className="font-semibold text-gray-900 mb-2">🎯 Ekstra Şanslar:</h3>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>• En çok beğeni alan 3 kullanıcıya özel ödüller</li>
          <li>• Özel gün kampanyalarında ekstra çekiliş hakkı</li>
          <li>• Belirli konumlarda fotoğraf çekenlere double şans</li>
        </ul>
      </div>
    </div>
  );
};

export default PremiumPackages;