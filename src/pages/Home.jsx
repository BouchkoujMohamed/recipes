import React, { useState } from 'react'
import Header from './../components/Header'
import ExploreMenu from '../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../components/FoodDisplay';


function Home() {
  const [category , setCategory] = useState('All Recipes')
  return (
    <div >
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category} />
    </div>
  )
}

export default Home
