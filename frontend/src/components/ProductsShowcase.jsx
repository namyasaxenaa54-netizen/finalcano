import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

const ProductsShowcase = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://canocrystal-backend.onrender.com/api/products")
      .then(res => res.json())
      .then(data => {
        console.log("🔥 PRODUCTS:", data);
        setProducts(data);
      })
      .catch(err => console.error("ERROR:", err));
  }, []);

  return (
    <section id="products" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#2C2C2C] mb-4">
            Products
          </h2>
          <p className="text-lg sm:text-xl text-[#3A3A3A] max-w-2xl mx-auto">
            Products coming directly from backend
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.length === 0 ? (
            <p className="text-center col-span-full">No products found</p>
          ) : (
            products.map((product) => (
              <Card
                key={product._id || product.id}
                className="group cursor-pointer overflow-hidden rounded-2xl border-0 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white"
              >
                <div className="relative h-48 sm:h-56 overflow-hidden bg-gray-50">
                  <img
                    src={product.image || "https://via.placeholder.com/150"}
                    alt={product.name}
                    className="w-full h-full object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <CardContent className="p-4 sm:p-6">
                  <h4 className="text-lg sm:text-xl font-bold text-[#2C2C2C] mb-2">
                    {product.name}
                  </h4>

                  <p className="text-[#3A3A3A] text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  <Button
                    variant="ghost"
                    className="w-full justify-between p-0 h-auto font-semibold hover:bg-transparent"
                  >
                    View Details
                    <ArrowRight size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))
          )}
        </div>

      </div>
    </section>
  );
};

export default ProductsShowcase;
