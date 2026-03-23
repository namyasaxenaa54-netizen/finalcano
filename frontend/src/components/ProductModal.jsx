import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from './ui/button';

const ProductModal = ({ product, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-[#E67E22] to-[#D35400] text-white p-6 rounded-t-3xl flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold">{product.name}</h2>
            {product.code && <p className="text-xl mt-1 opacity-90">{product.code}</p>}
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-full transition-colors">
            <X size={28} />
          </button>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Product Image */}
          {product.image && (
            <div className="mb-8">
              <img 
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-contain rounded-2xl bg-gray-50"
              />
            </div>
          )}

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Description</h3>
            <p className="text-gray-700 leading-relaxed">{product.description}</p>
          </div>

          {/* Specifications */}
          {product.specs && (
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Specifications</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="bg-gray-50 rounded-xl p-4">
                    <p className="text-sm text-gray-600 mb-1">{key}</p>
                    <p className="font-semibold text-gray-900">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Characteristics */}
          {product.characteristics && (
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Characteristics</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {product.characteristics.map((char, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <div className="w-2 h-2 rounded-full bg-[#E67E22] mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{char}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Scope */}
          {product.scope && (
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Scope of Application</h3>
              <p className="text-gray-700 leading-relaxed">{product.scope}</p>
            </div>
          )}

          {/* Mixing Ratio (for Epoxy) */}
          {product.mixingRatio && (
            <div className="mb-6 bg-orange-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mixing Ratio</h3>
              <p className="text-gray-700 font-mono">{product.mixingRatio}</p>
            </div>
          )}

          {/* CTA */}
          <div className="mt-8 flex gap-4">
            <Button className="flex-1 bg-gradient-to-r from-[#E67E22] to-[#D35400] text-white rounded-full py-6 text-lg">
              Request Quote
            </Button>
            <Button variant="outline" className="flex-1 border-2 border-[#E67E22] text-[#E67E22] rounded-full py-6 text-lg">
              Download Datasheet
            </Button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ProductModal;