import RecipeList from '@/components/RecipeList';
import React from 'react';

const fetchListOfRecipes = async () => {
    try {
        const response = await fetch('https://dummyjson.com/recipes?limit=100', {
            cache: 'force-cache',
        });
        const data = await response.json();
        return data?.recipes;
    } catch (error) {
        throw new Error('Error fetching recipes');
    }
};

const Recipe = async () => {
    const recipesList = await fetchListOfRecipes();
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-extrabold text-gray-800 mb-2">Discover Delicious Recipes</h1>
                <p className="text-lg text-gray-600">Explore a variety of dishes from around the world!</p>
            </div>
            <RecipeList recipesList={recipesList} />
        </div>
    );
};

export default Recipe;
