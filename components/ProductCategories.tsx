import React from 'react';
import { PRODUCTS } from '../constants';
import { PageView } from '../types';
import FadeIn from './FadeIn';

interface ProductCategoriesProps {
  onNavigate: (view: PageView) => void;
}

const ProductCategories: React.FC<ProductCategoriesProps> = ({ onNavigate }) => {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
            <FadeIn>
                <span className="text-raka-gold font-bold uppercase tracking-widest text-sm">Our Portfolio</span>
                <h2 className="text-3xl sm:text-5xl font-display font-bold text-raka-blue mt-2">Product Categories</h2>
                <div className="w-20 h-1 bg-raka-gold mx-auto mt-6"></div>
            </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRODUCTS.map((product, index) => (
                <FadeIn key={product.id} delay={index * 200} className="h-full">
                    <div className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full">
                        {/* Image Area */}
                        <div className="relative h-64 overflow-hidden">
                            <div className="absolute inset-0 bg-raka-blue/20 group-hover:bg-transparent transition-colors z-10"></div>
                            <img 
                                src={product.image} 
                                alt={product.title} 
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute top-4 right-4 bg-raka-gold text-raka-blue text-xs font-bold px-3 py-1 rounded z-20">
                                {product.brand}
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="p-8 flex-grow flex flex-col">
                            <h3 className="text-2xl font-bold text-raka-blue mb-3">{product.title}</h3>
                            <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-grow">
                                {product.description}
                            </p>
                            
                            <div className="border-t border-gray-100 pt-6 mt-auto">
                                <ul className="space-y-2 mb-6">
                                    {product.features.slice(0, 3).map((feat, idx) => (
                                        <li key={idx} className="flex items-start text-xs text-gray-500">
                                            <i className="fas fa-chevron-right text-raka-gold mt-0.5 mr-2"></i>
                                            {feat}
                                        </li>
                                    ))}
                                </ul>
                                
                                <button 
                                    onClick={() => onNavigate(product.targetView)}
                                    className="block w-full text-center bg-raka-blue border-2 border-raka-blue text-white font-bold py-2 rounded hover:bg-raka-gold hover:border-raka-gold hover:text-raka-blue transition-colors uppercase text-sm"
                                >
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            ))}
        </div>

      </div>
    </section>
  );
};

export default ProductCategories;