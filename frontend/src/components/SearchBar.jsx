import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { realCanoBondProducts, blackberryBrandData, furnitureProducts } from '../mockData';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Combine all products for search
  const allProducts = [
    ...realCanoBondProducts.map(p => ({ ...p, brand: 'CanoBond', path: '/canobond' })),
    ...blackberryBrandData.sections.adhesives.products.map(p => ({ ...p, brand: 'Blackberry', path: '/blackberry' })),
    ...blackberryBrandData.sections.grouts.products.map(p => ({ ...p, brand: 'Blackberry', path: '/blackberry' })),
    ...furnitureProducts.map(p => ({ ...p, brand: 'Furniture', path: '/furniture' }))
  ];

  const handleSearch = (value) => {
    setSearchTerm(value);
    if (value.length > 1) {
      const filtered = allProducts.filter(product => 
        product.name?.toLowerCase().includes(value.toLowerCase()) ||
        product.code?.toLowerCase().includes(value.toLowerCase()) ||
        product.category?.toLowerCase().includes(value.toLowerCase()) ||
        product.description?.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filtered.slice(0, 8)); // Show max 8 results
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  };

  const handleResultClick = (product) => {
    navigate(product.path);
    setSearchTerm('');
    setResults([]);
    setIsOpen(false);
  };

  const clearSearch = () => {
    setSearchTerm('');
    setResults([]);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full max-w-2xl">
      {/* Search Input */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
          <Search className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
        </div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search products, codes, or categories..."
          className="w-full pl-9 sm:pl-12 pr-9 sm:pr-12 py-2 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#E67E22] focus:border-transparent transition-all"
        />
        {searchTerm && (
          <button
            onClick={clearSearch}
            className="absolute inset-y-0 right-0 pr-3 sm:pr-4 flex items-center"
          >
            <X className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 hover:text-gray-600" />
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && results.length > 0 && (
        <div className="absolute z-50 w-full mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 max-h-[400px] sm:max-h-[500px] overflow-y-auto">
          <div className="p-2 sm:p-3">
            <p className="text-xs sm:text-sm text-gray-500 mb-2 px-3 sm:px-4">Found {results.length} results</p>
            {results.map((product, index) => (
              <div
                key={index}
                onClick={() => handleResultClick(product)}
                className="flex items-center space-x-3 sm:space-x-4 p-2 sm:p-3 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors"
              >
                {product.image && (
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-12 h-12 sm:w-16 sm:h-16 object-contain rounded-lg bg-gray-50"
                  />
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-semibold text-gray-900 text-xs sm:text-sm truncate">{product.name}</h4>
                    {product.code && (
                      <span className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 bg-[#E67E22] text-white rounded-full flex-shrink-0">
                        {product.code}
                      </span>
                    )}
                  </div>
                  <p className="text-[10px] sm:text-xs text-gray-500 truncate">{product.description}</p>
                  <p className="text-[10px] sm:text-xs text-[#E67E22] font-medium mt-0.5 sm:mt-1">{product.brand}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* No Results */}
      {isOpen && searchTerm.length > 1 && results.length === 0 && (
        <div className="absolute z-50 w-full mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 sm:p-8 text-center">
          <Search className="h-10 w-10 sm:h-12 sm:w-12 text-gray-300 mx-auto mb-3 sm:mb-4" />
          <p className="text-gray-600 text-sm sm:text-base">No products found for "{searchTerm}"</p>
          <p className="text-gray-400 text-xs sm:text-sm mt-2">Try searching with different keywords</p>
        </div>
      )}
    </div>
  );
};

export default SearchBar;