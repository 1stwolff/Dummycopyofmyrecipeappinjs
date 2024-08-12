'use client';

import { useState } from 'react';
import { CATEGORY } from '@/app/constants/recipe.constants';

const SubmitForm = () => {
  const [ingredients, setIngredients] = useState(['']);
  const [steps, setSteps] = useState(['']);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    image: '',
    cookingTimeInMinutes: '',
  });

  const handleIngredientChange = (index, value) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = value;
    setIngredients(newIngredients);
  };

  const handleAddIngredient = () => {
    setIngredients([...ingredients, '']);
  };

  const handleDeleteIngredient = (index) => {
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1);
    setIngredients(newIngredients);
  };

  const handleStepsChange = (index, value) => {
    const newSteps = [...steps];
    newSteps[index] = value;
    setSteps(newSteps);
  };

  const handleAddSteps = () => {
    setSteps([...steps, '']);
  };

  const handleDeleteSteps = (index) => {
    const newSteps = [...steps];
    newSteps.splice(index, 1);
    setSteps(newSteps);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      image: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      ...formData,
      ingredients,
      steps,
    });
    
  };

  return (
    <form className='space-y-5 pt-5' onSubmit={handleSubmit}>
      <div>
        <label className='block text-gray-700 font-medium mb-1' htmlFor='title'>Title</label>
        <input type='text' id='title' name='title' value={formData.title} onChange={handleInputChange} className='w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500' />
      </div>
      <div>
        <label className='block text-gray-700 font-medium mb-1' htmlFor='category'>Category</label>
        <select id='category' name='category' value={formData.category} onChange={handleInputChange} className='w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500' required>
          <option value=''>Select category</option>
          {CATEGORY.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className='block text-gray-700 font-medium mb-1' htmlFor='description'>Description</label>
        <textarea rows={5} id='description' name='description' value={formData.description} onChange={handleInputChange} className='w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500'></textarea>
      </div>
      <div>
        <input type='file' name='image' onChange={handleImageChange} className='w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500' />
      </div>
      <div>
        <label className='block text-gray-700 font-medium mb-1' htmlFor='cookingTimeInMinutes'>Cooking time (In minutes)</label>
        <input type='number' id='cookingTimeInMinutes' name='cookingTimeInMinutes' value={formData.cookingTimeInMinutes} onChange={handleInputChange} className='w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500' />
      </div>
      <div>
        <label className='block text-gray-700 font-medium mb-1'>Ingredients</label>
        {ingredients.map((ingredient, index) => (
          <div key={index} className='flex items-center'>
            <input type='text' name='ingredients' value={ingredient} onChange={(e) => handleIngredientChange(index, e.target.value)} className='w-full border border-gray-300 rounded-md px-4 py-2 mb-2 focus:outline-none focus:border-blue-500' placeholder={`Ingredient ${index + 1}`} />
            <button type='button' onClick={() => handleDeleteIngredient(index)} className='ml-2 text-red-400 font-medium focus:outline-none'>Delete This</button>
          </div>
        ))}
        <button type='button' onClick={handleAddIngredient} className='text-blue-500 font-medium focus:outline-none'>+ Add ingredient</button>
      </div>
      <div>
        <label className='block text-gray-700 font-medium mb-1'>Steps</label>
        {steps.map((step, index) => (
          <div key={index} className='flex items-center'>
            <textarea rows={2} name='steps' value={step} onChange={(e) => handleStepsChange(index, e.target.value)} className='w-full border border-gray-300 rounded-md px-4 py-2 mb-2 focus:outline-none focus:border-blue-500' placeholder={`Step ${index + 1}`} />
            <button type='button' onClick={() => handleDeleteSteps(index)} className='ml-2 text-red-400 font-medium focus:outline-none'>Delete This</button>
          </div>
        ))}
        <button type='button' onClick={handleAddSteps} className='text-blue-500 font-medium focus:outline-none'>+ Add step</button>
      </div>
      <button type='submit' className='bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 focus:outline-none'>Create Recipe</button>
    </form>
  );
};

export default SubmitForm;
