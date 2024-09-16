import React from 'react';
import HeroSection from './HeroSection';
import UserInputSection from './UserInputSection';
import RecipeSuggestions from './RecipeSuggestions';
import GroceryList from './GroceryList';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <UserInputSection />
      <RecipeSuggestions />
      <GroceryList />
    </div>
  );
};

export default HomePage;