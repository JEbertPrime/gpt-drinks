'use client'
import { useEffect, useState } from "react"

const IngredientList = (props)=> {
    //classlists
    const liClasses = 'w-full rounded-s p-2'

    const {ingredients, setIngredients} = props
    const handleChange = (e)=>{
        const value = e.target.value
        let tempIngredients = [...ingredients]
        tempIngredients[tempIngredients.length - 1] = value
        setIngredients(tempIngredients)
    }
    const handleKeyDown =(e)=>{
        if(e.keyCode == 13){
            let tempIngredients = [...ingredients]
            tempIngredients.push('')
            setIngredients(tempIngredients)
        }
        if(e.keyCode == 8 && ingredients[ingredients.length -1] == '' && ingredients.length > 1){
            console.log(ingredients)
            e.preventDefault()
            let tempIngredients = [...ingredients]
            tempIngredients.pop()
            setIngredients(tempIngredients)
        }
    }
    useEffect(()=>{

    })
    return (
        <ul className="list-disc  text-neutral-700">
               { ingredients.map((ingredient,i)=>{
                if(i<ingredients.length - 1){
                    return <li className={liClasses} key={'ingredient-'+i}>{ingredient}</li>
                }else{
                    return <li className={liClasses} key={'ingredient-'+i}><input className="w-full" autoFocus value={ingredient} onKeyDown={handleKeyDown} onChange={handleChange}/></li>
                }
               })}
        </ul>
    )
}
export default IngredientList