import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const UserInputSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Enter Your Ingredients</h2>
        <div className="space-y-4">
          <Input type="text" placeholder="Enter ingredients (e.g., chicken, broccoli, rice)" className="w-full" />
          <div className="flex space-x-4">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Dietary Preference" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">No Preference</SelectItem>
                <SelectItem value="vegan">Vegan</SelectItem>
                <SelectItem value="vegetarian">Vegetarian</SelectItem>
                <SelectItem value="keto">Keto</SelectItem>
                <SelectItem value="gluten-free">Gluten-Free</SelectItem>
              </SelectContent>
            </Select>
            <Button className="bg-green-600 hover:bg-green-700 text-white">Generate Meal Plan</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserInputSection;