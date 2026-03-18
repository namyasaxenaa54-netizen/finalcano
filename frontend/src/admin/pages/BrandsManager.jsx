import React, { useState, useEffect } from 'react';
import AdminAPI from '../utils/api';
import { toast } from 'sonner';
import { Save } from 'lucide-react';

const BrandsManager = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(null);

  useEffect(() => {
    loadBrands();
  }, []);

  const loadBrands = async () => {
    try {
      const data = await AdminAPI.getBrands();
      setBrands(data);
    } catch (error) {
      toast.error('Failed to load brands');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (brandId, updates) => {
    setSaving(brandId);
    try {
      await AdminAPI.updateBrand(brandId, updates);
      toast.success('Brand updated successfully!');
      loadBrands();
    } catch (error) {
      toast.error('Failed to update brand');
    } finally {
      setSaving(null);
    }
  };

  const handleFieldChange = (brandId, field, value) => {
    setBrands(brands.map(brand => 
      brand.id === brandId ? { ...brand, [field]: value } : brand
    ));
  };

  if (loading) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <div className="p-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Brands Management</h1>
        <p className="text-gray-600 mt-1">Update your brand information</p>
      </div>

      <div className="space-y-6">
        {brands.map((brand) => (
          <div key={brand.id} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold text-gray-900">{brand.name}</h2>
              <button
                onClick={() => handleUpdate(brand.id, {
                  name: brand.name,
                  tagline: brand.tagline,
                  description: brand.description,
                  brand_color: brand.brand_color,
                  light_color: brand.light_color,
                  logo: brand.logo,
                  banner_image: brand.banner_image
                })}
                disabled={saving === brand.id}
                className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
              >
                <Save size={16} />
                <span>{saving === brand.id ? 'Saving...' : 'Save Changes'}</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Brand Name</label>
                <input
                  type="text"
                  value={brand.name}
                  onChange={(e) => handleFieldChange(brand.id, 'name', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tagline</label>
                <input
                  type="text"
                  value={brand.tagline}
                  onChange={(e) => handleFieldChange(brand.id, 'tagline', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  value={brand.description}
                  onChange={(e) => handleFieldChange(brand.id, 'description', e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Brand Color</label>
                <div className="flex space-x-2">
                  <input
                    type="color"
                    value={brand.brand_color}
                    onChange={(e) => handleFieldChange(brand.id, 'brand_color', e.target.value)}
                    className="h-10 w-20 border border-gray-300 rounded cursor-pointer"
                  />
                  <input
                    type="text"
                    value={brand.brand_color}
                    onChange={(e) => handleFieldChange(brand.id, 'brand_color', e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Light Color</label>
                <div className="flex space-x-2">
                  <input
                    type="color"
                    value={brand.light_color}
                    onChange={(e) => handleFieldChange(brand.id, 'light_color', e.target.value)}
                    className="h-10 w-20 border border-gray-300 rounded cursor-pointer"
                  />
                  <input
                    type="text"
                    value={brand.light_color}
                    onChange={(e) => handleFieldChange(brand.id, 'light_color', e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Logo URL</label>
                <input
                  type="url"
                  value={brand.logo}
                  onChange={(e) => handleFieldChange(brand.id, 'logo', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                {brand.logo && (
                  <img src={brand.logo} alt="Logo preview" className="mt-2 h-16 object-contain" />
                )}
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Banner Image URL</label>
                <input
                  type="url"
                  value={brand.banner_image || ''}
                  onChange={(e) => handleFieldChange(brand.id, 'banner_image', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandsManager;
