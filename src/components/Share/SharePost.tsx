import React, { useState } from 'react';
import { Camera, MapPin, Hash, Image as ImageIcon, X } from 'lucide-react';

const SharePost: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [caption, setCaption] = useState('');
  const [location, setLocation] = useState('');
  const [tags, setTags] = useState('');

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setSelectedImage(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle post submission
    console.log({ selectedImage, caption, location, tags });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
            <Camera className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Hikayeni Paylaş</h2>
            <p className="text-gray-600">Gördüğün, yaşadığın anları dünyayla paylaş</p>
          </div>
        </div>
      </div>

      {/* Share Form */}
      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-6">
        {/* Image Upload */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Fotoğraf
          </label>
          {!selectedImage ? (
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary-400 transition-colors">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="image-upload"
              />
              <label htmlFor="image-upload" className="cursor-pointer">
                <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-2">Fotoğraf yüklemek için tıklayın</p>
                <p className="text-sm text-gray-500">PNG, JPG, GIF (max. 10MB)</p>
              </label>
            </div>
          ) : (
            <div className="relative">
              <img
                src={selectedImage}
                alt="Selected"
                className="w-full h-64 object-cover rounded-lg"
              />
              <button
                type="button"
                onClick={removeImage}
                className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* Caption */}
        <div className="mb-6">
          <label htmlFor="caption" className="block text-sm font-medium text-gray-700 mb-2">
            Hikayeni Anlat
          </label>
          <textarea
            id="caption"
            rows={4}
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none"
            placeholder="Bu yerin senin için ne ifade ettiğini, neler hissettiğini, hangi anıları canlandırdığını anlat..."
          />
          <p className="text-sm text-gray-500 mt-1">
            {caption.length}/500 karakter
          </p>
        </div>

        {/* Location */}
        <div className="mb-6">
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
            <MapPin className="w-4 h-4 inline mr-1" />
            Konum
          </label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            placeholder="Neredesin? (örn: Galata Kulesi, İstanbul)"
          />
        </div>

        {/* Tags */}
        <div className="mb-6">
          <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-2">
            <Hash className="w-4 h-4 inline mr-1" />
            Etiketler
          </label>
          <input
            type="text"
            id="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            placeholder="Etiketleri virgülle ayırın (örn: istanbul, manzara, gündoğumu)"
          />
        </div>

        {/* Submit Button */}
        <div className="flex space-x-4">
          <button
            type="submit"
            disabled={!selectedImage || !caption.trim()}
            className="flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Hikayeni Paylaş
          </button>
          <button
            type="button"
            className="btn-secondary"
            onClick={() => {
              setSelectedImage(null);
              setCaption('');
              setLocation('');
              setTags('');
            }}
          >
            Temizle
          </button>
        </div>
      </form>

      {/* Tips */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
        <h3 className="font-semibold text-gray-900 mb-3">💡 İpuçları:</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>• Fotoğrafınızın hikayesini anlatın, sadece ne gördüğünüzü değil ne hissettiğinizi de paylaşın</li>
          <li>• Konumu doğru belirtin, başkaları da aynı yeri keşfetmek isteyebilir</li>
          <li>• Etiketler kullanarak içeriğinizin daha kolay bulunmasını sağlayın</li>
          <li>• Özgün ve kişisel deneyimlerinizi paylaşın</li>
        </ul>
      </div>
    </div>
  );
};

export default SharePost;