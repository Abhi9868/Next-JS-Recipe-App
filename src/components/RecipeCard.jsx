// components/RecipeCard.js

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const RecipeCard = ({ recipe }) => {
    return (
        <Link href={`/recipe-list/${recipe.id}`}>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Specify width and height for the Image component */}
                <Image
                    src={recipe.image}
                    alt={recipe.name}
                    width={500} // Set a specific width
                    height={200} // Set a specific height
                    className="w-full h-48 object-cover"
                />
                <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{recipe.name}</h3>
                    <p className="text-sm text-gray-500 mb-1">Cuisine: {recipe.cuisine}</p>
                    <p className="text-sm text-gray-500 mb-1">Servings: {recipe.servings}</p>
                    <p className="text-sm text-gray-500 mb-1">Prep Time: {recipe.prepTimeMinutes} mins</p>
                    <p className="text-sm text-gray-500 mb-1">Cook Time: {recipe.cookTimeMinutes} mins</p>
                    <p className="text-sm text-gray-500 mb-2">Difficulty: {recipe.difficulty}</p>
                    <div className="flex flex-wrap gap-1 mb-2">
                        {recipe.tags.map((tag) => (
                            <span key={tag} className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <button className="mt-2 w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors">
                        View Recipe
                    </button>
                </div>
            </div>
        </Link>
    );
};

export default RecipeCard;
