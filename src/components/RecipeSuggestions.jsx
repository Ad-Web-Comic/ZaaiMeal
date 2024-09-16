import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Leaf, UtensilsCrossed } from 'lucide-react';

const RecipeCard = ({ title, time, isVegetarian, isPrepFriendly }) => (
  <Card className="hover:shadow-lg transition-shadow duration-300">
    <CardHeader>
      <CardTitle className="text-lg">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="flex space-x-2 text-sm text-gray-500">
        <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> {time} min</span>
        {isVegetarian && <span className="flex items-center"><Leaf className="w-4 h-4 mr-1" /> Vegetarian</span>}
        {isPrepFriendly && <span className="flex items-center"><UtensilsCrossed className="w-4 h-4 mr-1" /> Prep-friendly</span>}
      </div>
    </CardContent>
  </Card>
);

const RecipeSuggestions = () => {
  const recipes = [
    { title: "Chicken Stir Fry", time: 30, isVegetarian: false, isPrepFriendly: true },
    { title: "Vegetable Curry", time: 45, isVegetarian: true, isPrepFriendly: false },
    { title: "Quinoa Salad", time: 20, isVegetarian: true, isPrepFriendly: true },
    { title: "Grilled Salmon", time: 25, isVegetarian: false, isPrepFriendly: false },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Recipe Suggestions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recipes.map((recipe, index) => (
            <RecipeCard key={index} {...recipe} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecipeSuggestions;