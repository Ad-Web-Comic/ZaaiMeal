import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="bg-green-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          Simplify Your Meal Planning
        </h1>
        <p className="mt-3 max-w-md mx-auto text-xl text-gray-500 sm:text-2xl md:mt-5 md:max-w-3xl">
          Reduce food waste, save time, and enjoy delicious meals with our smart Meal Plan Generator.
        </p>
        <div className="mt-10 flex justify-center">
          <Button className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-md text-lg font-semibold">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;