import React from 'react'


function About() {
  return (
    <div className=' p-[20px]'>
      <div className='max-w-3xl mx-auto my-12 p-6 bg-gray-100 rounded-lg custom-shadow'>
        <div className='text-center'>
          <img src="/img_about.jpg" className='"w-full h-auto rounded-lg mb-6' alt="Sister's Recipes" />
          <h1 class="text-4xl font-bold text-gray-800 mb-4">About <span class="text-orange-500">Sister's Recipes</span></h1>
          <p className='text-lg text-gray-600 leading-relaxed mb-4'>
          Welcome to <span class="text-orange-500 font-semibold">Sister's Recipes</span>, a place where food lovers gather to explore delicious, easy-to-make dishes that bring family and friends together. At Sister's Recipes, we believe that cooking should be a joyful and accessible experience for everyone, whether you're a seasoned chef or a beginner in the kitchen.
          </p>
          <p class="text-lg text-gray-600 leading-relaxed mb-4">
                Our brand is inspired by the warmth and love shared over home-cooked meals. We focus on creating recipes that use everyday ingredients to craft extraordinary flavors. From comforting classics to creative new takes on traditional dishes, <span class="text-orange-500 font-semibold">Sister's Recipes</span> is dedicated to providing a wide range of meal ideas that will inspire you to cook, share, and celebrate.
            </p>
            <p class="text-lg text-gray-600 leading-relaxed">
                Whether you're looking for quick weeknight dinners, festive holiday treats, or indulgent desserts, <span class="text-orange-500 font-semibold">Sister's Recipes</span> has something for every occasion. Join us as we continue to share the recipes that make mealtimes memorable!
            </p>


        </div>
      </div>
        
    </div>
   

  )
}

export default About
