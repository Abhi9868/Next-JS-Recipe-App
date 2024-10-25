// components/RecipeDetails.js

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const fetchRecipesDetails = async (recipeId) => {
    try {
        const response = await fetch(`https://dummyjson.com/recipes/${recipeId}`, {
            cache: 'force-cache',
        });
        const data = await response.json();
        return data; // Return the entire data object
    } catch (error) {
        throw new Error('Error fetching recipe details');
    }
};

const RecipeDetails = async ({ params }) => {
    const { details } = await params; // Destructure the parameters directly
    const recipeDetails = await fetchRecipesDetails(details); // Fetch recipe details

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-4xl font-bold mb-4 text-center text-purple-600 transition-transform transform hover:scale-105">
                {recipeDetails.name}
            </h1>
            <Image
                src={recipeDetails.image}
                alt={recipeDetails.name}
                width={500} // Specify width
                height={300} // Specify height
                className="w-full h-64 object-cover rounded-lg shadow-md mb-6 transition-transform transform hover:scale-105"
            />

            <div className="mb-4">
                <h2 className="text-2xl font-semibold mb-2 text-blue-500">Ingredients</h2>
                <ul className="list-disc list-inside mb-4 space-y-2">
                    {recipeDetails.ingredients.map((ingredient, index) => (
                        <li key={index} className="text-gray-700 text-lg transition-colors hover:text-blue-600">
                            {ingredient}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mb-4">
                <h2 className="text-2xl font-semibold mb-2 text-blue-500">Instructions</h2>
                <ol className="list-decimal list-inside mb-4 space-y-2">
                    {recipeDetails.instructions.map((instruction, index) => (
                        <li key={index} className="text-gray-700 text-lg transition-colors hover:text-blue-600">
                            {instruction}
                        </li>
                    ))}
                </ol>
            </div>

            <div className="flex flex-wrap justify-between text-gray-600">
                <div className="mb-2">
                    <span className="font-semibold text-gray-800">Prep Time:</span> {recipeDetails.prepTimeMinutes} mins
                </div>
                <div className="mb-2">
                    <span className="font-semibold text-gray-800">Cook Time:</span> {recipeDetails.cookTimeMinutes} mins
                </div>
                <div className="mb-2">
                    <span className="font-semibold text-gray-800">Servings:</span> {recipeDetails.servings}
                </div>
                <div className="mb-2">
                    <span className="font-semibold text-gray-800">Difficulty:</span> {recipeDetails.difficulty}
                </div>
                <div className="mb-2">
                    <span className="font-semibold text-gray-800">Cuisine:</span> {recipeDetails.cuisine}
                </div>
                <div className="mb-2">
                    <span className="font-semibold text-gray-800">Calories per Serving:</span> {recipeDetails.caloriesPerServing}
                </div>
            </div>

            {/* Go Back Button */}
            <Link href="/recipe-list">
                <button
                    className="mt-6 inline-block bg-gradient-to-r from-purple-600 to-blue-500 text-white text-lg font-semibold py-2 px-4 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
                >
                    Go Back
                </button>
            </Link>
        </div>
    );
};

export default RecipeDetails;
