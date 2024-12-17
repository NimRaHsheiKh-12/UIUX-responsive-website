'use client';
import React, { useState } from 'react';

export default function Page() {
  const products = [
    { id: 1, name: 'Gradient Graphic T-shirt', img: '/rainbow.png', description: 'Description of the product goes here. It\'s stylish and comfortable.' },
    { id: 2, name: 'Polo with Tipping details', img: '/pink.png', description: 'Description of the product goes here. It\'s stylish and comfortable.' },
    { id: 3, name: 'Black stripped T-shirt', img: '/blacknwhite.png', description: 'Description of the product goes here. It\'s stylish and comfortable.' },
    { id: 4, name: 'Skinny Fit jeans', img: '/skinny fit jeans.png', description: 'Description of the product goes here. It\'s stylish and comfortable.' },
    { id: 5, name: 'Checkered shirt', img: '/checkered shirt.png', description: 'Description of the product goes here. It\'s stylish and comfortable.' },
    { id: 6, name: 'Sleeve Stripped T-shirt', img: '/sleeve stripped t-shirt.png', description: 'Description of the product goes here. It\'s stylish and comfortable.' },
    { id: 7, name: 'Faded Skinny jeans', img: '/faded skinny jeans.png', description: 'Description of the product goes here. It\'s stylish and comfortable.' },
    { id: 8, name: 'Courage Graphic T-shirt', img: '/courage graphic t-shirt.png', description: 'Description of the product goes here. It\'s stylish and comfortable.' },
    { id: 9, name: 'Loose Fit bermuda Shorts', img: '/loose fit bermuda shorts.png', description: 'Description of the product goes here. It\'s stylish and comfortable.' },
    { id: 10, name: 'T-shirt with tape details', img: '/t-shirt with tape details.png', description: 'Description of the product goes here. It\'s stylish and comfortable.' },
    { id: 11, name: 'Polo with Tipping Details', img: '/pink.png', description: 'Description of the product goes here. It\'s stylish and comfortable.' },
    { id: 12, name: 'Greeny printed shirt', img: '/shirt1.png', description: 'Description of the product goes here. It\'s stylish and comfortable.' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const totalPages = Math.ceil(products.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-wrap pt-8">
      {/* Filter Column on the Left */}
      <div className="w-full lg:w-1/4 p-4 bg-gray-100">
        <h3 className="text-xl font-bold mb-4">Filter</h3>

        {/* Categories Section */}
        <div className="mb-6">
          <h4 className="font-semibold">Categories</h4>
          <ul>
            <li><a href="#" className="text-gray-700 hover:text-gray-900">T-shirts</a></li>
            <li><a href="#" className="text-gray-700 hover:text-gray-900">Short Shirts</a></li>
            <li><a href="#" className="text-gray-700 hover:text-gray-900">Hoodies</a></li>
            <li><a href="#" className="text-gray-700 hover:text-gray-900">Jeans</a></li>
          </ul>
        </div>

        {/* Price Range Section */}
        <div className="mb-6">
          <h4 className="font-semibold">Price Range</h4>
          <input type="range" min="0" max="500" step="1" className="w-full" />
          <div className="flex justify-between text-sm text-gray-600">
            <span>$0</span>
            <span>$500</span>
          </div>
        </div>

        {/* Colors Section */}
        <div className="mb-6">
          <h4 className="font-semibold">Colors</h4>
          <div className="flex space-x-2">
            <button className="w-8 h-8 rounded-full bg-red-500"></button>
            <button className="w-8 h-8 rounded-full bg-blue-500"></button>
            <button className="w-8 h-8 rounded-full bg-green-500"></button>
            <button className="w-8 h-8 rounded-full bg-yellow-500"></button>
            <button className="w-8 h-8 rounded-full bg-gray-500"></button>
          </div>
        </div>

        {/* Sizes Section (Button options) */}
        <div className="mb-6">
          <h4 className="font-semibold">Sizes</h4>
          <div className="flex flex-wrap gap-2">
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none">
              Small
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none">
              Medium
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none">
              Large
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none">
              Extra Large
            </button>
          </div>
        </div>

        {/* Dress Style Section (Button options) */}
        <div className="mb-6">
          <h4 className="font-semibold">Dress Style</h4>
          <div className="flex flex-wrap gap-2">
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none">
              Casual
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none">
              Formal
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none">
              Sporty
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none">
              Chic
            </button>
          </div>
        </div>

        {/* Apply Now Button */}
        <button className="bg-black text-white py-2 px-4 rounded-lg w-full hover:bg-gray-800 transition-all">
          Apply Now
        </button>
      </div>

      {/* Product Cards Section */}
      <div className="w-full lg:w-3/4 p-4 pt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {/* Product Cards */}
          {currentProducts.map(product => (
            <div key={product.id} className="w-full bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all">
              <img src={product.img} alt={product.name} className="w-full h-[298px] rounded-md object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                <p className="text-sm text-gray-600 mt-2">{product.description}</p>
                <button className="mt-4 bg-black text-white py-2 px-4 rounded-lg w-full hover:bg-gray-800 transition-all">Shop Now</button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex items-center justify-between mt-8">
          {/* Previous Button */}
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none disabled:bg-gray-200"
          >
            Previous
          </button>

          {/* Page Number Buttons */}
          <div className="flex space-x-2">
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(page => (
              <button
                key={page}
                onClick={() => handlePageClick(page)}
                className={`px-4 py-2 rounded-md ${currentPage === page ? 'bg-black text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              >
                {page}
              </button>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none disabled:bg-gray-200"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}