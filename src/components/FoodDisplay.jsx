import React ,{ useContext } from 'react'
import { StoreContext } from '../contex/StoreContext';
import FoodItem from "./FoodItem";

function FoodDisplay({category}) {

  const {food_list} = useContext(StoreContext)

  return (
    <div className=' mt-[30px] ' id='food-display'>
      <h2 className='text-[max(2vw,24px)] font-semibold '>Top dishes near you</h2>
      <div className='grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-[30px] gap-y-[40px]'>
        {food_list.map((food, index) =>{

          if(category==='All Recipes' || category===food.category){
            return<FoodItem food={index} 
                    Name={food.name}  description={food.description} Image={food.image} httpsi={food.httpsi}/>
          }else{
          }
          
        })}
      </div>
      
    </div>
  )
}

export default FoodDisplay
