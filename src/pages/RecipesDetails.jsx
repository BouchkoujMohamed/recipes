import React ,{ useContext } from 'react'
import { StoreContext } from '../contex/StoreContext';
import { useParams } from 'react-router-dom';




function RecipesDetails(){
  const {food_list} = useContext(StoreContext)
  
  const { httpsi } = useParams(); 
  const recipe = food_list.find((item) => item.httpsi === httpsi); 

  if (!recipe) {
    return <h2>Recipe Not Found</h2>;
  }

  return (
    <div className="p-8 "  >
      <div className='w-[70%]'>
        <h1 className="text-4xl font-bold">{recipe.name}</h1>
        <p className='text-[#4b4b4b] text-[18px] mt-2 space-x-2 space-y-6'>{recipe.description.concept}</p>
        <img src={recipe.image} alt={recipe.name} className="w-[500px] my-4" />
        <h2 className="text-3xl font-medium mt-8">You only need a few ingredients which are</h2>
        <p className='text-[#4b4b4b] text-[18px] mt-3 space-x-2 space-y-6'>{recipe.description.Ingredients}</p>
        <h2 className="text-3xl font-medium mt-10">How To Make <span className='font-semibold '>{recipe.name}</span> </h2>
        <p className='text-[#4b4b4b] text-[18px] mt-3 space-x-2 space-y-6'>{recipe.description.make}</p>
      </div>
      
    </div>
  );
}

export default RecipesDetails
