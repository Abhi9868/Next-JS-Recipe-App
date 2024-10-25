import Link from 'next/link';
import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500 text-white text-center p-10">
      <h1 className="text-5xl font-extrabold mb-4">Welcome to the Recipe App</h1>
      <p className="text-lg mb-6">
        Discover delicious recipes and explore a world of culinary delights!
      </p>
      <p className="text-md mb-4">
        Whether you're a beginner or a seasoned chef, we have something for everyone.
        From quick snacks to gourmet meals, our recipes are crafted to suit every palate.
      </p>
      <p className="text-md mb-6">
        Join our community to share your culinary creations, swap tips, and find inspiration
        for your next meal. Don't forget to check out our seasonal collections for the freshest ideas!
      </p>

      {/* Gradient Button */}
      <Link
        href="/recipe-list"
        className="inline-block bg-gradient-to-r from-blue-500 to-green-400 text-white text-lg font-semibold py-2 px-6 rounded hover:bg-gradient-to-l transition-all"
      >
        Explore Recipes
      </Link>

      {/* Image Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        {[
          "https://cdn.dummyjson.com/recipe-images/39.webp",
          "https://cdn.dummyjson.com/recipe-images/36.webp",
          "https://cdn.dummyjson.com/recipe-images/12.webp"
        ].map((image, index) => (
          <div key={index} className="overflow-hidden rounded-full shadow-lg animate-bounce transition-transform transform hover:scale-105">
            <img src={image} alt={`Recipe ${index + 1}`} className="w-40 h-40 object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
