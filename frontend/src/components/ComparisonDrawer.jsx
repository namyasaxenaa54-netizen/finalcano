import React, { useState, useEffect } from 'react';
import { X, ArrowLeftRight, CheckCircle, XCircle } from 'lucide-react';
import { Button } from './ui/button';

const ComparisonDrawer = ({ products, isOpen, onClose }) => {
  const [compareItems, setCompareItems] = useState([]);

  useEffect(() => {
    setCompareItems(products.slice(0, 3)); // Max 3 products to compare
  }, [products]);

  const removeItem = (index) => {
    const newItems = compareItems.filter((_, i) => i !== index);
    setCompareItems(newItems);
    if (newItems.length === 0) {
      onClose();
    }
  };

  const getCommonSpecs = () => {
    if (compareItems.length === 0) return [];
    const allSpecs = compareItems.map(item => Object.keys(item.specs || {}));
    const commonSpecs = allSpecs.reduce((a, b) => a.filter(c => b.includes(c)));
    return commonSpecs;
  };

  if (!isOpen || compareItems.length === 0) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between z-10">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <ArrowLeftRight className="text-[#E67E22] w-5 h-5 sm:w-6 sm:h-6" />
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Compare Products</h2>
            <span className="text-xs sm:text-sm text-gray-500">({compareItems.length})</span>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={20} className="sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Comparison Content */}
        <div className="p-4 sm:p-6">
          {/* Product Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {compareItems.map((product, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-4 sm:p-6 shadow-lg relative">
                <button
                  onClick={() => removeItem(index)}
                  className="absolute top-2 right-2 sm:top-3 sm:right-3 p-1 sm:p-1.5 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                >
                  <X size={14} className="sm:w-4 sm:h-4" />
                </button>
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-32 sm:h-40 object-contain mb-3 sm:mb-4 bg-white rounded-xl"
                />
                <h3 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg mb-1 sm:mb-2">{product.name}</h3>
                {product.code && (
                  <span className="inline-block px-2 sm:px-3 py-0.5 sm:py-1 bg-[#E67E22] text-white rounded-full text-[10px] sm:text-xs font-semibold mb-2 sm:mb-3">
                    {product.code}
                  </span>
                )}
                <p className="text-gray-600 text-[10px] sm:text-xs md:text-sm line-clamp-2">{product.description}</p>
              </div>
            ))}
          </div>

          {/* Specifications Comparison */}
          {getCommonSpecs().length > 0 && (
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-[#E67E22] to-[#D35400] px-4 sm:px-6 py-3 sm:py-4">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">Specifications Comparison</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold text-gray-700">Specification</th>
                      {compareItems.map((product, index) => (
                        <th key={index} className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold text-gray-700">
                          {product.name.split(' ').slice(0, 2).join(' ')}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {getCommonSpecs().map((spec, index) => (
                      <tr key={index} className="border-t border-gray-100">
                        <td className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-medium text-gray-900 capitalize">
                          {spec}
                        </td>
                        {compareItems.map((product, pIndex) => (
                          <td key={pIndex} className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-xs sm:text-sm text-gray-600">
                            {product.specs?.[spec] || 'N/A'}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Features Comparison */}
          <div className="mt-6 sm:mt-8 bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-[#8E44AD] to-[#7D3C98] px-4 sm:px-6 py-3 sm:py-4">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">Features Comparison</h3>
            </div>
            <div className="p-4 sm:p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {compareItems.map((product, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base mb-2 sm:mb-3">{product.name}</h4>
                    <ul className="space-y-1.5 sm:space-y-2">
                      {product.features?.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start space-x-2">
                          <CheckCircle size={14} className="text-green-500 flex-shrink-0 mt-0.5 sm:w-4 sm:h-4" />
                          <span className="text-gray-600 text-[10px] sm:text-xs md:text-sm">{feature}</span>
                        </li>
                      )) || <li className="flex items-start space-x-2"><XCircle size={14} className="text-gray-300 sm:w-4 sm:h-4" /><span className="text-gray-400 text-[10px] sm:text-xs">No features listed</span></li>}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button 
              onClick={onClose}
              className="flex-1 bg-gradient-to-r from-[#E67E22] to-[#D35400] text-white rounded-full py-3 sm:py-4 text-sm sm:text-base font-semibold"
            >
              Close Comparison
            </Button>
            <Button 
              variant="outline"
              className="flex-1 border-2 border-[#E67E22] text-[#E67E22] rounded-full py-3 sm:py-4 text-sm sm:text-base font-semibold hover:bg-[#E67E22]/5"
            >
              Request Quote for All
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonDrawer;