'use client'
import Title from './_components/Title'
import IngredientList from './_components/IngredientList'
import SubmitButton from './_components/SubmitButton'
import CocktailList from './_components/CocktailList'
import LoadIndicator from './_components/LoadIndicator'
import {useState, Suspense}from 'react'
export default function Home() {
  let [ingredients, setIngredients] = useState([ ''])
  let [cocktailsData, setCocktailsData] = useState(null)
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-6 m:p-12 gap-4 ">
        <div className="w-full max-w-sm lg:w-3/4 bg-red-100 text-white border-emerald-400 rounded drop-shadow  p-10 h-full overflow-hidden">
          <div className='flex max-w-sm flex-col gap-5 m:w-1/2 p-5 m:p-0 m-auto'>
          <Title >My Ingredients</Title>
          <p className='text-gray-700 text-base'>Write down a list of cocktail ingredients you have, and an AI will tell you how to get drunk! Note: This breaks sometimes, as the AI is not perfect and neither am I.</p>
          <IngredientList ingredients={ingredients} setIngredients={setIngredients}/>

          <SubmitButton ingredients={ingredients} setCocktailsData={setCocktailsData}/>
          </div>
          
        </div>
        {
          cocktailsData ? (
          <Suspense fallback={<LoadIndicator/>}>
          <CocktailList promise={cocktailsData}/>

          </Suspense>
          ):null
        }
        
    </main> 
  )
}
