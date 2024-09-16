import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const GroceryList = () => {
  const groceryItems = [
    "2 lbs chicken breast",
    "1 bunch broccoli",
    "1 can coconut milk",
    "1 lb quinoa",
    "Fresh cilantro"
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Grocery List</h2>
        <ul className="space-y-2">
          {groceryItems.map((item, index) => (
            <li key={index} className="flex items-center space-x-3 text-gray-700">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default GroceryList;