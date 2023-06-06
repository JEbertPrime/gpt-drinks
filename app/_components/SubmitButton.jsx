import { Suspense, useState } from 'react'
import LoadIndicator from './LoadIndicator'
import openai from '../_lib/OpenAI'
const SubmitButton= (props)=>{
    const {ingredients, setCocktailsData} = props
    const [isLoading, setIsLoading] = useState(false)
    async function submitIngredients(ingredients){
        setIsLoading(true)
        const res = await fetch('/api',{method:'POST', body:JSON.stringify(ingredients)})
        const data =  res.json()
        setIsLoading(false)
        setCocktailsData(data)
    }
    return   isLoading ? <LoadIndicator/> : <button aria-label='Submit' className=" -transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded md:m-auto md:w-1/2" onClick={()=>submitIngredients(ingredients)} >Submit</button> 

    
}
export default SubmitButton