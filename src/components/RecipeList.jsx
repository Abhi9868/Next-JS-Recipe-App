// components/RecipeList.js

import React from 'react';
import RecipeCard from './RecipeCard';

const RecipeList = ({ recipesList }) => {
    return (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {recipesList.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
        </div>
    );
};

export default RecipeList;
